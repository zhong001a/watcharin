import { Box, Typography } from "@mui/material";
import React from "react";
// const fontStyleHead = {
//   fontFamily: "Kanit, sans-serif",
//   fontSize: "20px",
//   fontWeight: 400,
//   marginTop: "10px",
//   color: "#000",
// };

const PriceCard = ({ months, capacity }) => {
  const price = capacity.release_price - months * 400;
  return (
    <Box
      sx={{
        border: "1px solid #161C24",
        borderRadius: "6px",
        width: "100%",
        textAlign: "center",
        marginTop:'10px'
      }}
    >
      <Typography
        sx={{
          bgcolor: "#161C24",
          color: "#fff",
          fontFamily: "Kanit, sans-serif",
          fontSize: "20x",
          fontWeight: 500,
          padding: "10px 20px",
        }}
      >
        {capacity.size}
      </Typography>

      <Typography
        sx={{
          fontFamily: "Kanit, sans-serif",
          fontSize: "16px",
          fontWeight: 300,
          paddingTop: "10px",
        }}
      >
        ราคาเปิดตัว
      </Typography>
      <Typography
        sx={{
          fontFamily: "Kanit, sans-serif",
          fontSize: "18px",
          fontWeight: 400,
          padding: "5px 20px 10px",
        }}
      >
        {capacity.release_price.toLocaleString()}
      </Typography>

      <Typography
        sx={{
          fontFamily: "Kanit, sans-serif",
          fontSize: "16px",
          fontWeight: 300,
          paddingTop: "10px",
        }}
      >
        ราคารับซื้อ
      </Typography>
      <Typography
        sx={{
          fontFamily: "Kanit, sans-serif",
          fontSize: "18px",
          fontWeight: 400,
          padding: "5px 20px 10px",
        }}
      >
        {price.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default PriceCard;
