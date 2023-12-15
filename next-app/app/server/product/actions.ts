"use server"

export async function getProducts() {
    try {
        const res = await fetch('http://localhost:8000/api/product/allproduct')
        const data = await res.json()
        return data.data

    } catch (error) {
        return {error:error}
    }
}