import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PriceList from "./PriceList";
const fontStyle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "18px",
  fontWeight: 300,
  marginTop: "10px",
  color: "#000",
};
const AllProduct = ({ phone }) => {
  return (
    <Box>
      <Link to={`/offer?id=${phone.id}`} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            bgcolor: "#fff",
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "8px",
            paddingY: 3,
            "&:hover": {
              cursor: "pointer",
              boxShadow: "0px 10px 46px -14px rgba(0,0,0,0.176)", // Add box shadow on hover
            },
          }}
        >
          <img src={phone.image} width="100%" alt="" />
          <Typography
            sx={{
                fontFamily: "Kanit, sans-serif",
                fontSize: "24px",
                fontWeight: 400,
            }}
          >
            {phone.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              paddingY:'15px'
            }}
          >
            <Typography sx={fontStyle}>ขนาด</Typography>
            <Typography sx={fontStyle}>ราคารับซื้อ</Typography>
          </Box>
          {phone.capacities.map((capacity, index) => (
            <PriceList key={index} data={capacity} />
          ))}
        </Box>
      </Link>
    </Box>
  );
};

export default AllProduct;
