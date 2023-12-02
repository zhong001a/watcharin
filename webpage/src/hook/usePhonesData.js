
import useSWR from 'swr'
const API_URL = "http://localhost:8000/api/product";
// http://localhost:8000/api/product/phone?id=2
export const usePhones = ()=>{
    let phones = [];
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const  { data }  =  useSWR(`${API_URL}/allproduct`,fetcher)
    if(data?.status === 200){
        phones = data.data || []
    }
    return { data: phones }
}

export const useSinglePhone = (id)=>{
    let phones = [];
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const  { data }  =  useSWR(`${API_URL}/phone?id=${id}`,fetcher)
    if(data?.status === 200){
        phones = data.data || []
    }
    return { data: phones }
}

export const useBrand = () =>{
    let brands = [];
    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const  { data }  =  useSWR(`${API_URL}/brand`,fetcher)
    if(data?.status === 200){
        brands = data.data || []
    }
    return { data: brands }
}

