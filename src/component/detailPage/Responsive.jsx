import React from 'react'
import { useLocation } from 'react-router-dom'

function Responsive() {
    const {state} = useLocation()
  return (
    <div>
      <img src={state.mobileImg} alt="mobile" />
    </div>
  )
}

export default Responsive
