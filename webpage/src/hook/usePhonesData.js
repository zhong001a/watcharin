
import useSWR from 'swr'
const API_URL = "http://localhost:8000/api/product";

export const usePhones = ()=>{
    let phones = [];
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const  { data }  =  useSWR(`${API_URL}/allproduct`,fetcher)
    if(data?.status === 200){
        phones = data.data || []
    }
    return { data: phones}

}