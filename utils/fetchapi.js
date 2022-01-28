import axios from "axios";


export const baseUrl ="https://bayut.p.rapidapi.com/"

export const fetchApi = async (url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'b3c3162475mshd6b110cf8d0be7ep13b975jsnef535634ac8e'
          },
    });
    return data
};