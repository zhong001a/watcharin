import { Box, Typography } from "@mui/material";
import { usePhones } from "../service/productService";
import Image from "next/image";
import ProductList from "./ProductList";

const page = async () => {
  const res = await usePhones();
  console.log(res);
  return (
    <Box
      sx={{
        bgcolor: "#ffee",
      }}
    >
      {res.map((product: any, index: number) => (
        <ProductList {data:any} />
      ))}
    </Box>
  );
};

export default page;
