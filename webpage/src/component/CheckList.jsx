import { Box, Typography } from "@mui/material";
import React from "react";

const CheckList = ({ textTitle, data, setDetail, choosed, field }) => {
  return (
    <Box
      sx={{
        marginY: "20px",
        border: "1px solid #161c24",
        borderRadius: " 5px 5px",
        
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "#161c24",
          paddingY: "10px",
          borderRadius: "5px 5px 0px 0px",
          color: "#fff",
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Kanit, sans-serif',
            fontSize: "20px",
            fontWeight: 400,
            paddingLeft: "10px",
   
          }}
        >
          {textTitle}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          marginTop: "20px",
          marginBottom: "40px",
          paddingLeft: "10px",
        }}
      >
        {data &&
          data.map((text, index) => (
            <Typography
              sx={{
                minWidth: "160px",
                maxWidth: "170px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px 15px",
                bgcolor: choosed === text ? "#737373" : "#fff",
                color: choosed === text ? "#fff" : "#2b2b2b",
                border: "1px solid #161c24",
                borderColor: choosed === text ? "#737373" : "#f1f1f1",
                borderRadius: "5px",
                fontFamily: 'Kanit, sans-serif',
                fontSize: "18px",
                fontWeight: 300,
                cursor: "pointer",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                transition:
                  "background-color 0.3s, box-shadow 0.1s, transform 0.3s",
                "&:hover": {
                  borderColor: "#161c24",
       
                  cursor: "pointer",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                },
              }}
              onClick={() => {
                setDetail(text, field);
              }}
              key={index}
            >
              {text}
            </Typography>
          ))}
      </Box>
    </Box>
  );
};

export default CheckList;
