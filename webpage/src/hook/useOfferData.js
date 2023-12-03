// import useSWR from 'swr'
const API_URL = "http://localhost:8000/api/offer"

export const createOffer = async (offer) => {
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

