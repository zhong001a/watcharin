import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import IButton from "../../component/IButton";
// import { createOffer } from "../../hook/useOfferData";

const checkDivice = (divice) => {
  let grade = "A";
  if (divice.includes("มีรอยนิดหน่อย")) {
    grade = "B";
  } else if (divice.includes("มีรอยมาก")) {
    grade = "C";
  } else if (divice.includes("มีรอยตก")) {
    grade = "D";
  }
  return grade;
};

const checkScreen = (screen) => {
  let grade = "A";
  if (screen.includes("มีรอยบางๆ")) {
    grade = "B";
  } else if (screen.includes("มีรอยสะดุด")) {
    grade = "C";
  } else if (screen.includes("มีรอยแตกชำรุด")) {
    grade = "D";
  }
  return grade;
};

const checkDisplay = (display) => {
  let grade = "A";
  if (display.includes("จุด Bright / ฝุ่นในจอ")) {
    grade = "B";
  } else if (display.includes("จุด Dead / จุดสี")) {
    grade = "C";
  } else if (display.includes("แสดงผลไม่ได้")) {
    grade = "D";
  }
  return grade;
};

const CalPrice = (state, price) => {
  // const   checkDivice(state.divice);
  let sell_price = 0;
  let reduce_price = 0;

  const divice = checkDivice(state.divice)
  const screen = checkScreen(state.screen);
  const display = checkDisplay(state.display);


  if (state.model.includes("LL") || state.model.includes("OTHER")) {
    if(state.problems.length) {
      return 0;
    }
    reduce_price = price * 0.5;
  }

  

  sell_price = price - reduce_price;

  return sell_price;
};

const EditOffer = (state, data) => {
  const dataCapacity = data.capacities?.find((p) => p.size === state.capacity);
  const sellPrice = CalPrice(state, dataCapacity?.second_price);

  const offerData = {
    ...state,
    name: data.name,
    brand: data.brand,
    sell_price: sellPrice,
    seller: "watcharin",
    phone_no: "0621683645",
  };

  return offerData;
};

const OfferDetail = ({}) => {
  const location = useLocation();
  const { stateData, phoneData } = location.state;

  const offerData = EditOffer(stateData, phoneData);

  const saveOffer = async (offer) => {
    // const data = await createOffer(offer);
    console.log(offerData);
  };

  return (
    <Box>
      <Typography>OFFER DETAIL</Typography>
      <Box
        sx={{
          width: "250px",
          maxWidth: "250px",
        }}
      >
        <img src={phoneData.image} width="100%" alt="" />
      </Box>
      <IButton
        onClick={() => {
          saveOffer(offerData);
        }}
      >
        CREATE OFFER
      </IButton>
    </Box>
  );
};

export default OfferDetail;
