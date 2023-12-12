
import useSWR from 'swr'
const API_URL = "http://localhost:8000/api/product";

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

export const useImage =(name)=>{
    let image = "";
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const  { data }  = useSWR(`${API_URL}/phone/image?name=${name}`,fetcher)
    if(data?.status === 200){
        image = data.data || ""
    }
    return  image.name
}

// http://localhost:8000/api/product/phone/image?name=Iphone 13 
