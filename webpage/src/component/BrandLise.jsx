import { Box } from "@mui/material";
import React from "react";
import { useBrand } from "../hook/usePhonesData";

const BrandIList = ({ selected, setSelect }) => {
  const { data } = useBrand();

  const Tabs = ({ text, image }) => {
    return (
      <Box
        sx={{
          width: "105px",
          height: "80px",
          paddingX: "15px",
          paddingY: "10px",
          paddingBottom: "15px",
          bgcolor: text === selected ? "#fbfbfb" : "#e8e8e8",
          borderTop: "5px solid #e8e8e8",
          borderColor: text === selected ? "#161c24" : null,
          cursor: "pointer",
        }}
        onClick={() => {
          setSelect(text);
        }}
      >
        <img src={image} width="100%" height="100%" alt="" />
      </Box>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      {data.map((data, index) => {
        return <Tabs key={index} text={data.name} image={data.image} />;
      })}
    </Box>
  );
};

export default BrandIList;
