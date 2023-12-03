import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { OfferDetail } from "./CreateOffer";

// const style = {

// };

const ConfirmOffer =  ({ isOpen, setIsOpen, data, state }) => {

  const handleClose = () => setIsOpen(false);
  const offer = OfferDetail(data,state);

  return (
    <Box>
  
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* 
         */}
        <Fade in={isOpen}>
          <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth:'450px',
            maxWidth:'800px',
            width:'100%',
            maxHeight:'600px',
            minHeight:'450px',
            height:'100%',
            bgcolor: "background.paper",
            boxShadow: 20,
          }}>
            <img src={data.image} alt="" />
            <Typography id="transition-modal-title" variant="h6" component="h2">

            </Typography>

            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {JSON.stringify(offer)}
            </Typography>
            <Button>
              สร้างนัดหมาย
            </Button>


          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ConfirmOffer;
