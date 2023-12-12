import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const CheckBox = ({ textTitle, data, choosed, setDetail, field }) => {
  const [isToggled, setIsToggled] = useState(true);

  const toggleState = () => {
    setIsToggled(!isToggled);
  };
  return (
    <Box sx={{
      marginY: '20px',
      border:'1px solid #161c24',
      borderRadius:'6px 6px 0px 0px'
    }}>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#161c24",
          paddingY: "10px",
          borderRadius:'6px 6px 0px 0px',
          color:'#fff',
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            cursor:'pointer'
        }}
        onClick={() => {
          toggleState();
        }}

      >
       <Box sx={{
          display:'flex',
          justifyContent:'space-between'
        }}>
          <Typography
            sx={{
              fontFamily: "Kanit, sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              paddingLeft: "10px",
            }}

          >
            {textTitle}
          </Typography>
          <Typography
            sx={{
              paddingRight: "15px",
              color:'#fff'
            }}
          >
            {isToggled ?  "▬" : "▼"}
          </Typography>
          </Box>
      </Box>

      <Box
        sx={{
          display: isToggled ?  "flex" : "none",
          gap: 3,
          marginY: "20px",
          paddingLeft: "10px",
        }}
      >
        {data?.map((capacity, index) => (
          <Typography
            key={index}
            sx={{
              minWidth: "160px",
              maxWidth: "170px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10px 15px",
              bgcolor: choosed === capacity.size ? "#737373" : "#fbfbfb",
              color: choosed === capacity.size ? "#fff" : "#161c24",
              border: "2px solid #fff",
              fontFamily: 'Kanit, sans-serif',
              fontSize: "18px",
              fontWeight: 300,
              borderRadius: "8px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
              transition:
                "background-color 0.7s, box-shadow 0.1s, transform 0.3s",
              "&:hover": {
                bgcolor: "#161c24",
                color: "#fff",
                cursor: "pointer",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add box shadow on hover
              },
            }}
            onClick={() => {
              setDetail(capacity.size, field);
            }}
          >
            {capacity.size}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default CheckBox;
