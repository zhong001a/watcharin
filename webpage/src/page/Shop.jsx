import { Box } from "@mui/material";
import React, { useState } from "react";
import { usePhones } from "../hook/usePhonesData";
import AllProduct from "../feature/shop/AllProduct";
import BrandIList from "../component/BrandLise";

const Shop = () => {
  const { data } = usePhones();
  const [select, setSelect] = useState("");
  return (
    <Box
      sx={{
        bgcolor: "#e8e8e8",
      }}
    >

      <BrandIList select={select} setSelect={setSelect}/>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 3,
          paddingX: 2,
          paddingTop: 5,
          bgcolor: "#fbfbfb",
          paddingBottom: "30px",
          height: "100%",
          minHeight: "650px",
        }}
      >
        {data.map((data, index) =>
          select === "" ? (
            <AllProduct key={index} phone={data} />
          ) : data.brand === select ? (
            <AllProduct key={index} phone={data} />
          ) : null
        )}
      </Box>
    </Box>
  );
};

export default Shop;
