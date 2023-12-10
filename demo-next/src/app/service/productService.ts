const API_URL = "http://localhost:8000/api/product";

export async function usePhones () {
    const res = await fetch(`${API_URL}/allproduct`)
    if(res.status !== 200){
        throw new Error("Failed to fecth data")
    }
    const {data}  = await res.json()

    // console.log(res.status)
    return data
}