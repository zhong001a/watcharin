"use server"



const API_URL:string = "http://localhost:8000/api"
export async function getProducts() {
    try {
        const res = await fetch(`${API_URL}/product/allproduct`)
        const data = await res.json()
        return data.data

    } catch (error) {
        return {error:error}
    }
}
type UserData = {
  // Define the structure of the 'data' parameter
  // Adjust this based on the actual structure of your user data
  username: string;
  lastname: string;
  // ... other properties
}

interface ApiResponse {
  // Define the structure of the response from the API
  // Adjust this based on the actual structure of your API response
  message:string
  status: string;
  data:object
  // ... other properties
}

export async function createUser(data: UserData): Promise<ApiResponse> {

  try {
    const res = await fetch(`${API_URL}/offer/create`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Assuming the API returns JSON, you might want to parse it
    const result: ApiResponse = await res.json();

    return result;
  } catch (error) {
    // Catching all errors and throwing a generic error message
    throw new Error("Failed creating.");
  }
}