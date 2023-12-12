import { Box, Typography } from "@mui/material";
import React from "react";
import { useSingleOffer } from "../../hook/useOfferData";
import { useNavigate } from "react-router-dom";
import { useImage } from "../../hook/usePhonesData";

const fontStyle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 300,
  paddingLeft: "30px",
  paddingBottom:'20px'
};
const fontStyleHead = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 400,
  paddingBottom:'20px'
};

const OneOffer = ({ id }) => {
  const navigate = useNavigate();
  const offer = useSingleOffer(id);

  if (offer.length < 1) {
    navigate("/alloffer");
  }

  const image  = useImage(offer?.name);

  const formattedProblems = offer.problem?.name.replace(/[\[\]"]+/g, '');
  
  const problems = formattedProblems?.split(",")

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        display: "flex",
        justifyContent: "center",
        maxWidth: "1000px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "50%",
          textAlign: "center",
        }}
      >
        <img src={image} alt={image} />
        {/*  */}
      </Box>
      <Box
        sx={{
          width: "50%",
        }}
      >
        <Typography
          sx={{
            paddingTop: "10px",
            fontFamily: "Kanit, sans-serif",
            fontSize: "26px",
            fontWeight: 500,
            textAlign: "left",
          }}
        >
          {/* {offer.brand} {offer.name} */}
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "30%",
            }}
          >
            <Typography sx={fontStyleHead} >โมเดล</Typography>
            <Typography sx={fontStyleHead} >ตัวเครื่อง</Typography>
            <Typography sx={fontStyleHead} >หน้าจอ</Typography>
            <Typography sx={fontStyleHead} >การแสดงผล</Typography>
            <Typography sx={fontStyleHead} >ประกัน</Typography>
            <Typography sx={fontStyleHead} >ราคา</Typography>
            <Typography sx={fontStyleHead} >ปัญหา</Typography>
          </Box>

          <Box
            sx={{
              width: "50%",
            }}
          >
            <Typography sx={{ fontStyle }}>{offer.detail?.model}</Typography>
            <Typography sx={{ fontStyle }}>{offer.detail?.device}</Typography>
            <Typography sx={{ fontStyle }}>{offer.detail?.screen}</Typography>
            <Typography sx={{ fontStyle }}>{offer.detail?.display}</Typography>
            <Typography sx={{ fontStyle }}>{offer.detail?.warranty}</Typography>
            <Typography sx={{ fontStyle }}>{offer.sell_price?.toLocaleString()}</Typography>
            {problems?.map((problem,index)=>(
              <Typography key={index} sx={{ fontStyle }}>{problem}</Typography>

            )) }

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OneOffer;
