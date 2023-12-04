import { Box, Typography } from "@mui/material";
import React from "react";

const fontStyleHead = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 400,
  marginTop: "10px",
  color: "#000",
};
const PriceList = ({ data }) => {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'space-around'
    }}>
      <Typography sx={fontStyleHead}>{data.size}</Typography>
      <Typography sx={fontStyleHead}>{data.second_price.toLocaleString()}</Typography>
    </Box>
  );
};

export default PriceList;
