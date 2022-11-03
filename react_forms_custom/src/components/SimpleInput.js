import React, { useRef, useState } from 'react'

const SimpleInput = (props) => {
    const [userInput, setUserInput]=useState("")
    const [inputIsValid, setInputIsValid]=useState(true);
    const userInputRef=useRef("");
    const changehandler=(event)=>{
        setUserInput(event.target.value)
        console.log("user input change handler",event.target.value)
    }

    const submithandler=(event)=>{
        event.preventDefault();
if(userInput.trim().length===0){
    setInputIsValid(false)
    return
}
console.log("submit handler called",userInput,userInputRef.current.value)
setUserInput("")
    }
    const controlClass=inputIsValid?"form-control":"form-control invalid";
  return (
    <form onSubmit={submithandler}>
        <div className={controlClass}>
            <label>User Name</label>
            <input value={userInput} ref={userInputRef} className='form-input' onChange={changehandler} type="text" id="username" />
            {!inputIsValid && <p className='error-text'>User name is required</p>}
        </div>
        <div className='form-actions'>
            <button type='submit'>submit</button>
        </div>
    </form>
  )
}

export default SimpleInput