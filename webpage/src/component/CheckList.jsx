import { Box, Typography } from "@mui/material";
import React from "react";

const CheckList = ({ textTitle, data, selected, choosed, field }) => {
  return (
    <>
      <Box sx={{
        width:'100%',
        bgcolor:'#69afd1',
        paddingY:'10px',
        borderRadius:'5px',
        boxShadow:'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
      }}>
        <Typography sx={{
          fontSize:'18px',
          fontWeight:500,
          paddingLeft:'10px'
        }}>
          {textTitle }
     
        </Typography>
      </Box>

      <Box sx={{
        display:'flex',
        gap:3,
        marginY:'20px',
        paddingLeft:'10px',
        // display:'none'

      }}>
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
                padding:'10px 15px',
                bgcolor: choosed === text ? "#2b2b2b" : "#fff",
                color: choosed === text ? "#fff" : "#2b2b2b",
                border:'1px solid #161c24',
                borderColor: choosed === text ? "#2b2b2b" : "#f1f1f1",
                borderRadius: "5px",
                cursor:'pointer',
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
  
                transition:
                  "background-color 0.3s, box-shadow 0.1s, transform 0.3s",
                "&:hover": {
                  bgcolor: "#161c24",
                  color: "#fff",
                  cursor: "pointer",
                  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                },
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
    </>
  );
};

export default CheckList;
