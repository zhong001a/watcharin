import React, { useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSinglePhone } from "../hook/usePhonesData";
import { Box, Button } from "@mui/material";
import PhoneInfo from "../feature/product/PhoneInfo";
import ModalAlert from "../component/ModalAlert";

import CheckBox from "../component/CheckBox";
import CheckList from "../component/CheckList";
import CheckMultiList from "../component/CheckMultiList";
import {
  
  devices,
  screen,
  display,
  accessories,
  problem,
  model,
} from "../feature/offer/Infomations";
import ConfirmOffer from "../feature/offer/ConfirmOffer";
const initialState = {
  warranty :"หมด",
  capacity: "",
  model: "",
  device: "",
  screen: "",
  accessories: [],
  problems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addDetail":
      return { ...state, [action.field]: action.payload };

    case "addProblem":
      const existProblem = state.problems.indexOf(action.payload);

      let updatedProblems;

      if (existProblem !== -1) {
        updatedProblems = state.problems.filter(
          (problem) => problem !== action.payload
        );
      } else {
        updatedProblems = [...state.problems, action.payload];
      }
      if (updatedProblems.includes("ไม่มีปัญหา")) {
        updatedProblems = [];
      }
      return { ...state, problems: updatedProblems };

    case "setAccessory":
      const existAccessory = state.accessories.indexOf(action.payload);
      let updataAccesories;

      if (existAccessory !== -1) {
        updataAccesories = state.accessories.filter(
          (accessory) => accessory !== action.payload
        );
      } else {
        updataAccesories = [...state.accessories, action.payload];
      }
      return { ...state, accessories: updataAccesories };

    default:
      throw new Error("Unknow action");
  }
};

const Offer = () => {
  const [params, setParams] = useSearchParams();
  const id = params.get("id");
  const { data } = useSinglePhone(id);

  const [statedata, dispatch] = useReducer(reducer, initialState);

  const selected = (val, field) => {
    dispatch({ type: "addDetail", payload: val, field: field });
  };

  const setProblem = (valume) => {
    dispatch({ type: "addProblem", payload: valume });
  };

  const setAccessory = (valume) => {
    dispatch({ type: "setAccessory", payload: valume });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [text, setText] = useState("");
  const createOfferData = (stateData) => {
    const requiredFields = ["capacity", "model", "device", "screen", "display"];
    const missingField = requiredFields.find((field) => !stateData[field]);

    if (missingField) {
      setText(`${missingField}`);
      setIsEmpty(true);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Box sx={{ display: "flex",
     }}>
      <Box
        sx={{
          bgcolor: "#fff",
          flexBasis: "250px",
        }}
      >
        <PhoneInfo phone={data} />
      </Box>

      <Box
        sx={{
          flex: "1 1",
          bgcolor: "#fff",
          justifyContent: "center",
        }}
      >
        {isOpen ? (
          <ConfirmOffer
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            data={data}
            state={statedata}
          />
        ) : null}

        <CheckBox
          textTitle={"ความจุ"}
          data={data.capacities}
          selected={selected}
          choosed={statedata.capacity}
          field={"capacity"}
        />

        <CheckList
          textTitle={"โมเดล"}
          data={model}
          selected={selected}
          choosed={statedata.model}
          field={"model"}
        />

        <CheckList
          textTitle={"สภาพตัวเครื่อง"}
          data={devices}
          selected={selected}
          choosed={statedata.device}
          field={"device"}
        />

        <CheckList
          textTitle={"หน้าจอ"}
          data={screen}
          selected={selected}
          choosed={statedata.screen}
          field={"screen"}
        />
        <CheckList
          textTitle={"การแสดงผล"}
          data={display}
          selected={selected}
          choosed={statedata.display}
          field={"display"}
        />

        <CheckMultiList
          textTitle={"อุปกรณ์"}
          setProblem={setAccessory}
          data={accessories}
          choosed={statedata.accessories}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(3, 1fr)",
          }}
        >
          <CheckMultiList
            textTitle={"ปัญหาตัวเครื่อง"}
            setProblem={setProblem}
            data={problem}
            choosed={statedata.problems}
          />

          <Box textAlign={'center'}>
            <Button
                  sx={{
          
                    minWidth:'170px',
    
                    bgcolor: "#161c24",
                    padding: "10px 40px",
                    fontFamily: "Kanit, sans-serif",
                    fontSize: "20px",
                    fontWeight: 300,
                    borderRadius: "6px",
                    color: "#fff",
                    marginY:'20px',
                    "&:hover": {
                      bgcolor: "#fff",
                      color: "#161c24",
                      cursor: "pointer",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add box shadow on hover
                    },
                  }}
                  onClick={() => createOfferData(statedata)}
                >
                  ประเมินราคา
                </Button>


            
          </Box>

          <ModalAlert isEmpty={isEmpty} setIsEmpty={setIsEmpty} text={text} />
        </Box>
      </Box>
    </Box>
  );
};

export default Offer;
