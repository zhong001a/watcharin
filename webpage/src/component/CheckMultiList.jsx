import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const CheckMultiList = ({ textTitle, data, setProblem, choosed }) => {
  const isSelected = (item) => choosed?.some((c) => c === item);
  const [isToggled, setIsToggled] = useState(false);

  const toggleState = () => {
    setIsToggled(!isToggled);
  };
  return (
    <Box
      sx={{
        marginY: "20px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "#161c24",
          paddingY: "10px",
          borderRadius: "6px ",
          color: "#fff",
          cursor: "pointer",

          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
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
            }}
          >
            {isToggled ? "▬" : "▼"}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: isToggled ? "grid" : "none",
          gridTemplateColumns: "repeat(4, 4fr)",
          gap: 2,
          marginTop: "15px",
          paddingLeft: "10px",
          transition:
          "background-color 0.7s, box-shadow 0.1s, transform 0.3s",
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
                bgcolor: "#fff",
                border: isSelected(text) ? "2px solid #fff" : " 2px solid #fff",
                borderColor: isSelected(text) ? "#161c24" : "#f1f1f1",
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "Kanit, sans-serif",
                fontSize: "16px",
                fontWeight: 300,
              }}
              key={index}
              onClick={() => {
                setProblem(text);
              }}
            >
              {text}
            </Typography>
          ))}
      </Box>
    </Box>
  );
};

export default CheckMultiList;
