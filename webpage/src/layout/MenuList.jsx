import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MenuList = () => {
  const list = [
    { name: "ขาย", path: "" },
    { name: "ราคารับซื้อ", path: "shop" },
  ];

  return (
    <>
      {list.map((item, index) => (
        <Link
          key={index}
          to={`/${item.path}`}
          style={{ textDecoration: "none" }}
        >
          <Box
          key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: "200px",
              cursor: "pointer",
              paddingY: "3px",
              borderRadius: "6px",
              border: "1px solid #fff",

              transition:
                "background-color 1s, box-shadow 0.1s, transform 0.9s, color 1s",
              "&:hover": {
                bgcolor: "#f1f1f1",
                border: "1px solid #f1f1f1",
              },
            }}
          >
            <Typography
              key={index}
              sx={{
                fontFamily: "Kanit, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
 
                color: "#161c24",
                transition: "color 1s",
                "&:hover": {
                  color: "#e8e8e8",
                },
              }}
            >
              {item.name}
            </Typography>
          </Box>
        </Link>
      ))}
    </>
  );
};

export default MenuList;
