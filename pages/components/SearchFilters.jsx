import { useEffect,useState } from "react";
import {Flex,Select,Box,Text,Input,Spinner,Icon,Button} from "@chakra-ui/react"
import { useRouter } from "next/router";
import {MdCancle} from "react-icons/md"
import Image from "next/image"
// import { filterData,getFiltervalue } from "../../utils/filterData";
import {filterData, getFilterValues} from "../../utils/filterData"


const SearchFilters=()=>{
    const[value,setValue]=useState(false)
    console.log(value);
    // console.log(filterData);
    const router = useRouter()
    const[filters,setFilters]=useState(filterData)
    const searchProperties=(filterValues)=>{
        // console.log(filterValues);
        const path = router.pathname
        // console.log(path);
        const {query} = router
        // console.log(query);
        const values = getFilterValues(filterValues)
        values.forEach((item)=>{
            query[item.name] = item.value
           

        })
        router.push({pathname:path,query})

    }
    return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
        {filters?.map((filter)=>(
            <Box key={filter.queryName}>
                <Select
                placeholder={filter.placeholder} 
                w="fit-content"
                p="2"
                onChange={(e)=>searchProperties({[filter.queryName]:e.target.value})}
                >
                    {filter?.items?.map((item)=>(
                        <option value={item.value} key={item.value}>{item.name}</option>
                    ))}

                </Select>
            

            </Box>
        )

     )}
     {    <button onClick={()=>setValue((prevvalue)=>!prevvalue)}>add</button>}

    </Flex>
    )
    
}
export default SearchFilters