import { Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const CheckPrice =(state)=>{
    return state.capacity ==="256GB";
}

const OfferDetail = () => {
  const location = useLocation();
  const stateData = location.state;

  const price = CheckPrice(stateData);
  return (
    <Box>
      <h2>{JSON.stringify(price)}</h2>
    </Box>
  );
};

export default OfferDetail;
