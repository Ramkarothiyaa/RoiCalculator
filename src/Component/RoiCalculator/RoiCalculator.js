import React from 'react'
import { useState } from 'react'
import "./roicalculator.css"



const RoiCalculator = () => {

const [color,setColor]=useState("primary")
const[btnDisable,setBtnDisable]=useState(false)
const[input,setInput]=useState("")
const [inputone,setInputone]=useState("")   

function changeColor(){
setBtnDisable(true)
}

    return (
        <div className='maindiv'>
           <form >
  <div class="form-group" style={{marginLeft:4}} >
    <label><b className='title'>Roi Calculator</b></label>

<p class="form-check form-switch" style={{margin:0,marginLeft:365}}>
<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
  // checked 
  />  
</p>

    <input type="text" class="form-control" autoComplete='off' placeholder="0.000 USD"  />
    <small className='doller'>&#36;100 </small><small className='doller'>&#36;100</small> 
  </div>
<div>
    <small className='head'>TimeFrame</small>
   <p className='btnarng'>
    <button type="button" className='btn' class="btn btn-primary btn-sm" color={color}  onClick={changeColor} >1 Day</button> &nbsp; &nbsp;
    <button type="button" className='btn' class="btn btn-primary btn-sm"  >7 Day</button>&nbsp; &nbsp;
    <button type="button" className='btn' class="btn btn-primary btn-sm" >30 Day</button>&nbsp; &nbsp;
    <button type="button" className='btn' class="btn btn-primary btn-sm" >1 year</button>&nbsp; &nbsp;
    <button type="button" className='btn' class="btn btn-primary btn-sm" >5 year</button>&nbsp; &nbsp;
    
   </p>
</div>



<div>

<small className='head1'>Enable Accelerator APY</small>

<div class="form-check form-switch" style={{margin:0,marginTop:-27,marginLeft:365}} >
 <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
  // checked 
 value={input}
 onChange={e =>setInput(e.target.value)}
  />  
    </div>

    <small><p><b style={{color:"GrayText"}}>Select Tier</b></p></small>
   <p className='btnarng'>
<button type="button" className='btn' class="btn btn-primary btn-sm" color={color}  onClick={changeColor} >Tier 1</button> &nbsp; &nbsp;
    <button type="button" className='btn' className="btn btn-primary btn-sm" >2 Tier </button>&nbsp; &nbsp;
    <button type="button" className='btn' className="btn btn-primary btn-sm" >3 Tier</button>&nbsp; &nbsp;
    <button type="button" className='btn' className="btn btn-primary btn-sm" >4 Tier</button>&nbsp; &nbsp;
    <button type="button" className='btn' className="btn btn-primary btn-sm" >5 Tier{input}</button>&nbsp; &nbsp;
   </p>

</div>


  <div class="form-group" style={{marginLeft:4}}>
  <p style={{fontSize:12,fontWeight:850,color:'grey',marginLeft:250}}>ROI and Current Rate</p>
    <input type="text" class="form-control"  id="exampleInputPassword1" placeholder="0.00 USD"
    value={inputone}
 onChange={e => setInputone(e.target.value)}
   />
    <p style={{fontSize:12,fontWeight:850,color:'grey',marginLeft:160,letterSpacing:2}}>-0.000 Cake +0.000000 Don</p>
  </div>




<center>
  <p>
  <a className="btn btn-primary"  data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"  >Hide Details</a>
</p>
</center>

  <div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body" className='displaypraha'>
      
      <b>APY</b>
      <p>Calculated based on Current rates </p>
      <p>all figure are estimate provided from convenience only,and by no means repersent gauranteed retruns</p>
      
      </div>
    </div>
  </div>
</div>

</form>
        </div>
    )
}

export default RoiCalculator
