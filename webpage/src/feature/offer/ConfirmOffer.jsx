import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { OfferDetail } from "./CreateOffer";
import { createOneOffer } from "../../hook/useOfferData";
import { useNavigate } from "react-router-dom";

const fontStyle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 300,
  marginTop:'10px'
};
const fontStyleHead = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 400,
  marginTop:'10px'
};

const ConfirmOffer = ({ isOpen, setIsOpen, data, state }) => {
  const handleClose = () => setIsOpen(false);
  
  const offer = OfferDetail(data, state);
  const navigate = useNavigate();
  const saveOffer = async(offer) => {
    const save = await createOneOffer(offer)
    if(save?.id){
      // navigate('/alloffer',{ state: { data: save } })
      navigate('/alloffer')
    }

  };
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              minWidth: "450px",
              maxWidth: "800px",
              width: "90%",
              maxHeight: "600px",
              minHeight: "450px",
              height: "100%",
              bgcolor: "background.paper",
              boxShadow: 20,
              borderRadius: "6px",
            }}
          >
            <Box sx={{ width: "90%" }}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ width: "50%", textAlign: "center" }}>
                  <img src={data.image} width="50%" alt="" />
                </Box>
                <Box
                  sx={{
                    width: "20%",
                    padding: "20px 0px 0px 20px",
                    borderLeft: "1px solid #161c24",
                  }}
                >
                  <Typography sx={{ fontStyle }}>แบรนด์</Typography>
                  <Typography sx={{ fontStyle }}>รุ่น</Typography>
                  <Typography sx={{ fontStyle }}>ความจุ</Typography>

                  <Typography sx={{ fontStyle }}>ราคารับซื้อ</Typography>
                </Box>

                <Box
                  sx={{
                    width: "30%",
                    paddingY: "20px",
                  }}
                >
                  <Typography sx={fontStyleHead}>{data.brand}</Typography>
                  <Typography sx={fontStyleHead}>{data.name}</Typography>
                  <Typography sx={fontStyleHead}>{state.capacity}</Typography>
                  {offer.sell_price === 0 ? (
                    <Typography sx={fontStyleHead}>
                      ไม่สามารถรับซื้อได้
                    </Typography>
                  ) : (
                    <Typography sx={fontStyleHead}>
                      {offer.sell_price.toLocaleString()} .-
                    </Typography>
                  )}
                </Box>
              </Box>
                <Typography sx={{
                  textAlign:'center',
                  fontFamily: "Kanit, sans-serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  marginTop:'10px'
                }}>
                รายละเอียด {offer.device} {offer.screen} {offer.display} ปัญหา {offer.problems.length} อย่าง
               

                </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginY: "40px",
                }}
              >
                <Button
                  sx={{
                    minWidth: "170px",
                    bgcolor: "#fff",
                    padding: "10px 40px",
                    fontFamily: "Kanit, sans-serif",
                    fontSize: "20px",
                    fontWeight: 300,
                    borderRadius: "6px",
                    color: "#161c24",
                    border: "1px solid #161c24",
                    marginX: "20px",
                    "&:hover": {
                      bgcolor: "#fff",
                      color: "#161c24",
                      cursor: "pointer",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add box shadow on hover
                    },
                  }}
                  onClick={() => {
                    handleClose();
                  }}
                >
                  แก้ไข
                </Button>

                <Button
                  sx={{
                    display:offer.sell_price===0?"none":null,
                    minWidth: "170px",
                    bgcolor: "#161c24",
                    padding: "10px 40px",
                    fontFamily: "Kanit, sans-serif",
                    fontSize: "20px",
                    fontWeight: 300,
                    borderRadius: "6px",
                    color: "#fff",
                    marginX: "20px",
                    "&:hover": {
                      bgcolor: "#fff",
                      color: "#161c24",
                      cursor: "pointer",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add box shadow on hover
                    },
                  }}
  
                  onClick={() => {
                    saveOffer(offer);
                  }}
                >
                  นัดหมาย
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default ConfirmOffer;
