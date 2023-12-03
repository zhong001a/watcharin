import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MenuList = () => {
  const list = [{ name: "Phone", path: "phone" }];

  return (
    <>
      {list.map((item, index) => (
        <Typography
          key={index}
          sx={{
            textDecoration: "none",
          }}
          fontSize={"16px"}
          fontWeight={500}
        >
          <Link to={`/${item.path}`}></Link>
          {item.name}
        </Typography>
      ))}
    </>
  );
};

export default MenuList;
