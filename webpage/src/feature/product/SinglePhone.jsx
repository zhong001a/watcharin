import { Box, Typography } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSinglePhone } from "../../hook/usePhonesData";
import PriceCard from "./PriceCard";

const fontStyle = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 300,
  marginTop: "15px",
};
const fontStyleHead = {
  fontFamily: "Kanit, sans-serif",
  fontSize: "20px",
  fontWeight: 400,
  marginTop: "15px",
  paddingLeft: "30px",
};

const DateDetail = (release_date) => {
  const dateObject = new Date(release_date);
  const releaseYear = dateObject.getFullYear();
  const releaseMonth = dateObject.getMonth() + 1;
  const releaseDay = dateObject.getDay();
  const monthName = dateObject.toLocaleString('default', { month: 'long' });

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  
  
  return {
    releaseYear,
    releaseMonth,
    releaseDay,
    monthName,
    years: year - releaseYear,
    months: month - releaseMonth,
    totalMonth:((year-releaseYear)*12)+(month-releaseMonth)
  };
};

const SinglePhone = () => {
  const [params, setParams] = useSearchParams();
  const id = params.get("id");
  const { data } = useSinglePhone(id);
  const dateObject = DateDetail(data?.release_date);

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
        <img src={data.image} />
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
          {data.brand} {data.name}
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
            <Typography sx={{ fontStyle }}>วันเปิดตัว</Typography>
            <Typography sx={{ fontStyle }}>ระยะเวลาขาย</Typography>
          </Box>

          <Box
            sx={{
              width: "50%",
            }}
          >
            <Typography sx={fontStyleHead}>{dateObject.releaseDay} {dateObject.monthName} {dateObject.releaseYear}</Typography>
            <Typography sx={fontStyleHead}>{dateObject.years} ปี {dateObject.months} เดือน</Typography>
          </Box>
        </Box>
        <Box sx={{
          display:'flex',
          justifyContent:'flex-start',
          gap:4,
          paddingY:'15px'
        }}>

        {data.capacities?.map((capacity,index)=>(
            <PriceCard key={index} months={dateObject.totalMonth} capacity={capacity}/>
        ))}
        </Box>

      </Box>
    </Box>

  );
};

export default SinglePhone;
