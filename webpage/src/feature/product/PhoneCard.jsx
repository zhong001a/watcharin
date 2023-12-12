import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PhoneCard = ({ phone }) => {
  return (
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
            color: "#000",
          }}
        >
          {phone.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default PhoneCard;
