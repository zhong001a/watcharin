
import { Box } from "@mui/material";
import { getProducts } from "./server/product/actions";
import { useQuery } from "@tanstack/react-query";

export default async function Home() {

  const { data,error, isLoading } = useQuery({
      queryKey:['products'],
      queryFn: getProducts,
  })
  console.log(data)
  if(isLoading) return <h2>Loding...</h2>
  if(error) return <h2>{error.message}</h2>

  return (
    <Box>
     
    </Box>
  )
}
