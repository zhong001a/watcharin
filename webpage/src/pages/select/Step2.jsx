import React from 'react'

const Step2 = ({ setState }) => {
  return (
    <div>
        <h2>2</h2>
      <input type="text" onChange={(text)=>{ setState(text.target.value) }} />
    </div>
  )
}

export default Step2
