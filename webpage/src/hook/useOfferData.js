import useSWR from 'swr'
const API_URL = "http://localhost:8000/api/offer"

export const createOneOffer = async (offer) => {
  
  try {
    const res = await fetch(`${API_URL}/create`, {
      method: "POST",
      body: JSON.stringify(offer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.status === 201) throw Error("Failed request.");
    const { data } = await res.json();
   
    return data;

  } catch {
    throw Error("Failed creating offer.");
  }
}

export const useAllOffer = ()=>{
  let offers = [];
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const  { data }  =  useSWR(`${API_URL}/all`,fetcher)
  if(data?.status === 200){
    offers = data.data || []
  }
  return { offers }
}

export const useSingleOffer = (id)=>{
  let offer = [];
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const  { data }  =  useSWR(`${API_URL}/oneoffer?id=${id}`,fetcher)
  if(data?.status === 200){
    offer = data.data || []
  }
  return offer
}

export const deleteOffer = async (id)=>{
  try {
    
    await fetch(`${API_URL}/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
  
      },
    });
  } catch (error) {
    console.error('Error deleting data:', error);
  }
}

// http://localhost:8000/api/offer/delete/1

