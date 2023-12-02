import { Box } from '@mui/material'
import React from 'react'

import { warnning, 
  divice, 
  screen, 
  display, 
  accessories, 
  problem } from '../offer/Infomations'

const PhonseInfo = () => {

  return (
    <Box>
      {JSON.stringify(divice)}
    </Box>
  )
}

export default PhonseInfo
