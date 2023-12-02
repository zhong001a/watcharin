import { Box, Typography } from "@mui/material";
import React from "react";

const CheckList = ({ textTitle, data, selected, choosed, field }) => {
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
              border:'1px solid #fff',
              borderColor: choosed === text ? "#000" : "#fff",
              bgcolor:'#fff',
              borderRadius: "8px",
              cursor:'pointer'
            }}
            onClick={() => {
              selected(text, field);
            }}
            key={index}
          >
            {text}
          </Typography>
        ))}
    </Box>
  );
};

export default CheckList;
