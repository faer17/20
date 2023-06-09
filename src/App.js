import React ,{useState}from "react";
import './style.css'

export default function App() {
    const [count,setCount]=useState(0)
    if (count>=20) {
      return (
    <>
    <center>
    <h1>20</h1>
   <button className="btnone">increment</button>
   <br/>
   <br/>
   <button className="btntwo">decrement</button>
    </center>
    </>
    &&
    <>
    <center>
    <h1>{count}</h1>
   <button className="btnone">increment</button>
   <br/>
   <br/>
   <button className="btntwo" onClick={()=>{setCount(count-1)}}>decrement</button>
    </center>
    </>
    )
    }else if(count<=0){
      return(
        <>
  <center>
  <h1>0</h1>
  <button className="btnone">increment</button>
  <br/>
  <br/>
  <button className="btntwo">decrement</button>
  </center>
    </>
     &&
     <>
     <center>
     <h1>{count}</h1>
    <button className="btnone" onClick={()=>{setCount(count+1)}}>increment</button>
    <br/>
    <br/>
    <button className="btntwo">decrement</button>
     </center>
     </>
    )
    }else{
    return (
    <>
    <center>
     <h1>{count}</h1>
     <button className="btnone" onClick={()=>{setCount(count+1)}}>increment</button>
     <br/>
     <br/>
     <button className="btntwo" onClick={()=>{setCount(count-1)}}>decrement</button>
    </center>
    </>
      );
    }
}