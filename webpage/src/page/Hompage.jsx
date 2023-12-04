import { Box } from "@mui/material";
import React, { useState } from "react";
import BrandIList from "../feature/home/BrandIList.component";
import { usePhones } from "../hook/usePhonesData";
import PhoneCard from "../feature/product/PhoneCard"

const Homepage = () => {
  const [select, setSelect] = useState("");
  const { data } = usePhones();

  return (
    <Box>
      <BrandIList select={select} setSelect={setSelect} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 3,
          paddingX: 2,
          paddingTop: 5,
          bgcolor: "#fbfbfb",
          paddingBottom: "30px",
          height: '100%',
          minHeight:'650px'
          
        }}
      >
        {data.map((phone, index) =>
          select === "" ? (
            <PhoneCard key={index} phone={phone} />
          ) : phone.brand === select ? (
            <PhoneCard key={index} phone={phone} />
          ) : null
        )}
      </Box>
    </Box>
  );
};

export default Homepage;