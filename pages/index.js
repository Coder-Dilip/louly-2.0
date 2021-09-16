import React, {useState} from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import LandingPage from '../components/LandingPage'
import {useSelector, useDispatch} from 'react-redux'
import {incNumber, decNumber,squareNumber } from '../actions/index'
function Index() {


  // redux practice
  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch();
  const myState2=useSelector((state)=>state.SquareTheNumber.squareValue)
const myState3=useSelector((state)=>state.SquareTheNumber.name)
const [_num_for_square, set_num_for_square] = useState(0);


  return (
    <div>
    
<Header background='rgba(255, 255, 255, 0.849)' />
      <div style={{margin:'auto',maxWidth:'1500px'}}>
<LandingPage />
    </div>
    <Footer />

    {/* redux practice */}
    <button onClick={()=>{
dispatch(decNumber());
}}  title='Decrement' >-</button>
<input readOnly={true} type='text' name='quantity' placeholder='input' value={myState}></input>
<button  onClick={()=>{
dispatch(incNumber(5));
}} title='Increment'>+</button>

<br/>
<br/>
<br />


{/* for squaring the num */}

<input type='text' placeholder="enter num" onChange={(e)=>{
  set_num_for_square(e.target.value)
}} /><br/>
<button onClick={()=>dispatch(squareNumber(_num_for_square))}  >
calculate square
</button><br/>
<input type='text' readOnly={true} value={myState2==0?'output':myState2} />
{myState3.map((name)=>
<p>{name}</p>
)}
    </div>
  )
}

export default Index
