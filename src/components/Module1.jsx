import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../Redux/Slicers/counter'

function Module1() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      total:{count}
      <p>Adding: <button onClick={() => dispatch(increment())} > Add </button></p>
    </div>
  )

}

export default Module1