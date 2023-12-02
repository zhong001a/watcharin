import { Box, Typography } from '@mui/material'
import React from 'react'

const PhoneInfo = ({phone}) => {

  return (
    <Box>
        <img src={phone.image} alt="" />
        <Typography>
            {phone.model}
        </Typography>


    </Box>
  )
}

export default PhoneInfo
