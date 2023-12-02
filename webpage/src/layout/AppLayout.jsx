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

        <Box sx={{ width:'100%',maxWidth: '1000px',bgcolor:'#e8e8e8'}}>
           <Outlet />
        </Box>
      </Box>
   
      
    </>
   
  ) 
}

export default AppLayout
