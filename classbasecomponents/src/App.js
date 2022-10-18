
import { useState, useCallback } from 'react'; // usecallback function is used if we not call a button every were then
import './App.css';
import Paragraph from './Components/Paragraph';
import Button from './templaes/Button';

function App() {
  const [show, setShow]=useState(false)
  const [authorize, setAuthorized]=useState(false)


  const OnclickHandler=useCallback(()=>{
    console.log('In Click Handler')
    if(authorize)
    {
      setShow(prevState=>!prevState)
    }
    // setShow(!show)
    // console.log(show)

  },[authorize])

const authorizeHandler=()=>{
  console.log('In Authorize Handler')
  setAuthorized(true)
}

  const cancleHandler=()=>{
    setShow(!show)
  }
  return (
    <div className="App">
    <h1> Hello</h1>
   {show &&  <p>This is shown conditionall</p>}
   <Button type="button" onClick={authorizeHandler} >Authorize</Button>
   <Paragraph show={show} />
    <Button type="button" onClick={OnclickHandler} >{show?"Hide Paragraph":"Show Paragraph"}</Button>
    <br></br>
    <br></br>
  {show&&  <button style={{
    color:"white",
      backgroundColor:"red",
      width:"9rem",
      height:"3rem",
    }} type="button" onClick={cancleHandler} >cancel</button>}


    </div>
    
  );
}

export default App;
