import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { deleteOffer } from "../../hook/useOfferData";

// import { useLocation } from 'react-router-dom';
const OfferList = ({ offer }) => {
    // const location = useLocation()
    // const latedOffer = location.state.data;
   const deleteOfferHandle=(id)=>{
    console.log(id)
     deleteOffer(id)
   }
    return (
        <TableRow sx={{}}>
        <TableCell component="th" scope="row">
        <Link to={`/offer/${offer.id}`}>{offer.id}</Link>
        </TableCell>
        <TableCell align="center"><Link to={`/offer/${offer.id}`} style={{color:'#000'}}>{offer.name}</Link></TableCell>
        <TableCell align="center">{offer.brand}</TableCell>
        <TableCell align="center">{offer.capacity}</TableCell>
        <TableCell align="center">{offer.sell_price.toLocaleString()}</TableCell>
        <TableCell align="center" onClick={()=>{deleteOfferHandle(offer.id)}}>DONE</TableCell>
        </TableRow>
  );
};

export default OfferList;
