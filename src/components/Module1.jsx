import React,{useContext} from 'react'
import { useSelector , useDispatch } from 'react-redux';

// importing actions
import { addtocard } from '../Redux/Actions/Action';


function Module1() {

  const dispatch = useDispatch();

  const counter =  useSelector (( state ) => state.Cartitmechanger )

  return (
    <div>
      <h5>Total: {counter} </h5>
      <p>Adding: <button onClick={ () => dispatch( addtocard() ) } > Add </button></p>
    </div>
  )

}

export default Module1