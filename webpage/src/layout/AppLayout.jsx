import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'


const AppLayout = () => {
  return (
    <>
      <Header />
      <Box sx={{
          display:'flex',
          justifyContent:'center'
      }}>

        <Box sx={{ width:'100%',maxWidth: '1000px', bgcolor: 'brown' }}>
           <Outlet />
        </Box>
      </Box>
   
      
    </>
   
  ) 
}

export default AppLayout
