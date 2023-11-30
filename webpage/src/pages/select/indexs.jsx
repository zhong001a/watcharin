import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { usePhones } from '../../hook/usePhonesData'

import { Box } from '@mui/material'

const Indexs = () => {
    const [step, setStep] = useState(1)
    const [text, setState] = useState('');

    const { data } = usePhones();
    const problem = [ 'จอแตก','แบตเสื่อม']
    return (

        <div>
   

            <Box sx={{
                display:'flex',
                justifyContent:'space-between',
                width:'100%'
            }}>

            <h2 style={step===1?{ color: 'white'}:null}>A</h2>
            <h2 style={step===2?{ color: 'white'}:null}>A</h2>
            <h2 style={step===3?{ color: 'white'}:null}>A</h2>
            
               
            </Box>
 
            {
                step === 1 ? <Step1 data={data} /> :
                    step === 2 ? <Step2 setState={setState} /> :
                        step === 3 ? <Step3 stext={text} /> : null
            }
            <button
                onClick={() => { setStep(step - 1) }}
            >pre</button>
            <button disabled={step===3?true:false}
                onClick={() => { setStep(step + 1) }}
            >next</button>

        </div>
    )
}

export default Indexs
