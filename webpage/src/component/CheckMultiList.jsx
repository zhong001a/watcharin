import { Box, Typography } from "@mui/material";
import React from "react";

const CheckMultiList = ({ textTitle, data, setProblem, choosed }) => {
  const isSelected = (item) => choosed?.some((c) => c === item );
 
  return (
    <>
    {textTitle}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 4fr)",
        gap:1
      }}
    >
      
      {data &&
        data.map((text, index) => (
          <Typography
            sx={{
              minWidth:'160px',
              maxWidth:'170px',
              width:'100%',
              display:'flex',
              alignItems:"center",
              justifyContent:'flex-start',
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
    </>
  );
};

export default CheckMultiList;
