import Link from "next/link"
import Image from 'next/image';
import {Flex,Box,Text,Button} from "@chakra-ui/react"
import {baseUrl,fetchApi} from "../utils/fetchapi"
import Properties from "../pages/components/Property"

export default function Home({propertyForRent,propertyForSale}) {
  const Banner =({purpose,title1,title2,desc1,desc2,buttonText,linkname,imageUrl})=>(
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300}/>
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text  fontSize="3xl" fontWeight="bol">{title1}<br/>{title2}</Text>
        <Text color="gray.700" paddingTop="3"paddingBottom="3" fontSize="lg" fontWeight="medium">{desc1} <br/>{desc2}</Text>
        <Button fontSize="xl">
          <Link href={linkname}>{buttonText}</Link>

        </Button>

      </Box>
      

    </Flex>
  )
  return (
   <div>
     <Banner
     purpose="RENT A HOME"
     title1="Rental Homes For"
     title2="Everyone"
     desc1="Explore Apartments,Villas Homes"
     desc2="and more"
     buttonText="Explore Renting"
     linkname="/search?purpose=for-rent"
     imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
     />
     <Flex flexWrap="wrap">
       {propertyForRent.map((property)=><Properties property={property} key={property.id}/>)}
    </Flex>
     <Banner
     purpose="BUY A HOME"
     title1="Find Buy & own Your "
     title2="Dream Home"
     desc1="Explore Apartments,Villas Homes"
     desc2="and more"
     buttonText="Explore Buying"
     linkname="/search?purpose=for-sale"
     imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
     />
      <Flex flexWrap="wrap">
       {propertyForSale.map((property)=><Properties property={property} key={property.id}/>)}
    </Flex>


   </div>
  )
}


export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
return{
  props:{
    propertyForSale:propertyForSale?.hits,
    propertyForRent:propertyForRent?.hits 
  }
}
};
