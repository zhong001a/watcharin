import { Box, Typography } from "@mui/material";
import React from "react";
const fontStyle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 300,
  marginTop: "10px",
};
const fontStyleHead = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "22px",
  fontWeight: 400,
  marginTop: "10px",
};

const PhoneInfo = ({ phone, detail }) => {
  
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <img src={phone.image} alt="" />
      <Typography sx={fontStyleHead}>{phone.name}</Typography>
      <Typography sx={fontStyle}>{detail?.capacity}</Typography>
      <Typography sx={fontStyle}>{detail?.model}</Typography>
      <Typography sx={fontStyle}>{detail?.device}</Typography>
      <Typography sx={fontStyle}>{detail?.screen}</Typography>
      {detail.problems?.map((problem, index) => (
        <Typography key={index} sx={fontStyle}>
          {problem}
        </Typography>
      ))}

    </Box>

  );
};

export default PhoneInfo;
