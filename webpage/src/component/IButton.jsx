import { Box, Button } from "@mui/material";
import React from "react";

const IButton = ({ onClick, children, url }) => {
  return (
    <Box
      sx={{
        width: "150px",
        maxWidth: "170px",
 
      }}
    >
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "10px 20px",
            fontSize: "18px",
            bgcolor: "#69afd1",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
            transition:
              "background-color 0.7s, box-shadow 0.1s, transform 0.3s",
            "&:hover": {
              bgcolor: "#161c24",
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add box shadow on hover
            }
          }}
          onClick={onClick}
          to={"/"}
        >
          {children}
        </Button>
 
    </Box>
  );
};

export default IButton;
