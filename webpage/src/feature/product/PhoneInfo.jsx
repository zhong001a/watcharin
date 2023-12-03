import { Box, Typography } from "@mui/material";
import React from "react";

const PhoneInfo = ({ phone }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}>
      <img src={phone.image} alt="" />
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        {phone.name}
      </Typography>
    </Box>
  );
};

export default PhoneInfo;
