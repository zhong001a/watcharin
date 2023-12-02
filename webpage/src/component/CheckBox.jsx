import { Box } from "@mui/material";
import React from "react";

const CheckBox = ({ textTitle, data, choosed, selected, field }) => {

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
      }}
    >
      {textTitle}
      {data?.map((capacity,index)=>(
        <Box  
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            height: "40px",
            bgcolor: choosed === capacity.size ? "#161c24" : "#fbfbfb",
            color: choosed === capacity.size ? "#fff" : "#161c24",
            padding: "8px 25px",
            border: "2px solid #fff",
            fontSize: "24px",
            fontWeight: 500,
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
            "&:active": {
              bgcolor: "#69afd1", // Change this to your desired active color
              boxShadow: "none", // Remove box shadow on active
              transform: "scale(1)", // Reset the scaling on active
            },
          }}
          onClick={() => {
            selected(capacity.size, field);
          }}
        >
          {capacity.size}
        </Box>
      ))}
    </Box>
  );
};

export default CheckBox;
