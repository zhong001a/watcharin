import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ProductItem ({product}) {
  return (
    <Box>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <Typography>{product.id}</Typography>
    </Box>
  )
}
