import { Box } from "@mui/material";
import React from "react";
import shoplogo from "./logo.PNG";
import MenuList from "./MenuList";

const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "#fff",
          }}
        >
          <Box
            sx={{
              width: "70px",
              paddingTop: "2px",
            }}
          >
            <img src={shoplogo} width="100%" alt="shopwelike" />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              padding: "20px 0px 20px 20px",
              margin: 0,

            }}
          >
            <MenuList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
