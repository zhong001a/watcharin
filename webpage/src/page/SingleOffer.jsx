import { Box } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';

import OneOffer from '../feature/offer/OneOffer';

const SingleOffer = () => {
    let { id } = useParams();
  return (
    <Box>
        {id?<OneOffer id={id}/>:null}
        
    </Box>
  )
}

export default SingleOffer