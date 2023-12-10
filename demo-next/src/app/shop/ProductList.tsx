import { Box, Typography } from '@mui/material'
import React from 'react'

const ProductList = ({ data: any }) => {
  return (
    <Box>
        <Typography>
            {data.name}
        </Typography>
    </Box>
  )
}

export default ProductList
