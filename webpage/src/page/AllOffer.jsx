import { Box } from "@mui/material";
import React from "react";
// import { useLocation } from "react-router-dom";
import { useAllOffer } from "../hook/useOfferData";
import OfferList from "../feature/offer/OfferList";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AllOffer = () => {
//   const location = useLocation();
//   const { data } = location?.state;
  const { offers } = useAllOffer();
  return (
    <Box
      sx={{
        bgcolor: "#fff",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id </TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Brand&nbsp;</TableCell>
              <TableCell align="center">Capacity&nbsp;</TableCell>
              <TableCell align="center">Sell Price&nbsp;</TableCell>
              <TableCell align="center">Status&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {offers.map((offer, index) => (
              <OfferList key={index} offer={offer} />
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllOffer;
