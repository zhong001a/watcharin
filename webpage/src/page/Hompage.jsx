import { Box } from "@mui/material";
import React, { useState } from "react";
import { usePhones } from "../hook/usePhonesData";
import PhoneCard from "../feature/product/PhoneCard";
import BrandIList from "../component/BrandLise";

const Homepage = () => {
  const [selected, setSelect] = useState("");
  const { data } = usePhones();

  return (
    <Box sx={{ bgcolor: "#E8E8E8" }}>
      <BrandIList selected={selected} setSelect={setSelect}/>
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

        {data.map((phone, index) =>
          selected === "" || phone.brand === selected? (
            <PhoneCard key={index} phone={phone}/>
          ) : null
        )}

      </Box>
    </Box>
  );
};

export default Homepage;
