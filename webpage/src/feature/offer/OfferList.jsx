import { Box, TableCell, TableRow } from "@mui/material";
import React from "react";

const OfferList = ({ offer }) => {

    return (
        <TableRow sx={{}}>
        <TableCell component="th" scope="row">
            {offer.id}
        </TableCell>
        <TableCell align="center">{offer.name}</TableCell>
        <TableCell align="center">{offer.brand}</TableCell>
        <TableCell align="center">{offer.capacity}</TableCell>
        <TableCell align="center">{offer.sell_price}</TableCell>
        <TableCell align="center">DONE</TableCell>
        </TableRow>
  );
};

export default OfferList;
