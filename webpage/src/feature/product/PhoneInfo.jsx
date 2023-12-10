import { Box, Typography } from "@mui/material";
import React from "react";
const fontStyle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 300,
  marginTop:'10px'
};

const PhoneInfo = ({ phone, detail }) => {
  console.log(detail);
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <img src={phone.image} alt="" />
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        {phone.name}
      </Typography>
      <Typography>
        <Typography
          sx={fontStyle}
        >
          {detail?.capacity}
        </Typography>
      </Typography>
      <Typography>
        <Typography
          sx={fontStyle}
        >
          {detail?.model}
        </Typography>
      </Typography>
      <Typography>
        <Typography
          sx={fontStyle}
        >
          {detail?.device}
        </Typography>
      </Typography>
      <Typography>
        <Typography
          sx={fontStyle}
        >
    {detail?.screen}
        </Typography>
      </Typography>
    </Box>
  );
};

export default PhoneInfo;
