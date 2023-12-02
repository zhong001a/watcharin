import { Box, Typography } from '@mui/material'
import React from 'react'
import { useBrand } from '../../hook/usePhonesData'

const BrandIList = ({ select, setSelect }) => {
    const { data } = useBrand()

    const Tabs = ({ text, image }) => {
        return (
            <Box
                sx={{
                    width: '105px',
                    height: '80px',
                    paddingX:'10px',
                    paddingY: '10px',
                    bgcolor: text===select?'#fbfbfb':null,
                    borderTop:'5px solid #e8e8e8',
                    borderColor: text===select?'#000':null,
                }}
                onClick={()=>{
                    setSelect(text)
                }}
            >
                <img src={image} width='100%' height='100%' alt="" />
            </Box>

        )
    }
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',

            }}
        >
            {data.map((data, index) => {
                return (
                    <Tabs key={index} text={data.name} image={data.image} />
                )
            })}
        </Box>
    )
}

export default BrandIList
