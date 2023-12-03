import { Box } from "@mui/material";
import React, { useReducer, useState } from "react";
import { useSinglePhone } from "../../hook/usePhonesData";
import { useNavigate, useSearchParams } from "react-router-dom";
import PhoneInfo from "./PhoneInfo";
import CheckBox from "../../component/CheckBox";
import {
  divice,
  screen,
  display,
  accessories,
  problem,
  model,
} from "./Infomations";
import CheckList from "../../component/CheckList";
import CheckMultiList from "../../component/CheckMultiList";
import IButton from "../../component/IButton";
import ConfirmOffer from "./ConfirmOffer";

const initialState = {
  capacity: "",
  model: "",
  divice: "",
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

const OfferPage = () => {
  const [params, setParams] = useSearchParams();
  const id = params.get("id");
  const { data } = useSinglePhone(id);
  const navigate = useNavigate();


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

  const [ isOpen, setIsOpen] = useState(false)
  const createOfferData = (stateData) => {

    setIsOpen(true);
    // if (stateData) {
    //   navigate("/offer/detail", { state: { stateData, phoneData: data } });
    // }
  };



  return (
    <Box sx={{ display: "flex" }}>
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
          justifyContent:'center'
        }}
      >
      <ConfirmOffer isOpen={isOpen} setIsOpen={setIsOpen}/>

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
          data={divice}
          selected={selected}
          choosed={statedata.divice}
          field={"divice"}
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
        </Box>

        <IButton onClick={() => createOfferData(statedata)} url={""}>
          เสนอราคา
        </IButton>
      </Box>
    </Box>
  );
};

export default OfferPage;
