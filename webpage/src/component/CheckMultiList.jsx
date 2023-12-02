import { Box, Typography } from "@mui/material";
import React from "react";

const CheckMultiList = ({ textTitle, data, setProblem, choosed }) => {
  const isSelected = (item) => choosed?.some((c) => c === item );
 
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
      }}
    >
      {textTitle}:
      {data &&
        data.map((text, index) => (
          <Typography
            sx={{

              padding: "10px 15px",
              bgcolor: '#fff',
              border:'2px solid #161c24',
              borderColor:isSelected(text) ? "#69afd1" : "#161c24",
              borderRadius: "8px",
              cursor:'pointer'
            }}
            key={index}
            onClick={()=>{
                setProblem(text)
 
            }}
          >
            {text}
          </Typography>
        ))}
    </Box>
  );
};

export default CheckMultiList;
