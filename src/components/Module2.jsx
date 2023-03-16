import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../Redux/Slicers/counter'

function Module2() {
  const dispatch =  useDispatch()
  return (
    <div><p>Cut: <button onClick={()=>dispatch(decrement())} > Add </button></p></div>
  )
}

export default Module2