
import "./NewSubscription.css"
import FormSubscription from "./FormSubscription"
import { useState } from "react"

const NewSubscription = (props) => {
  const [showForm, setShowForm]=useState(false)
 const  onSaveHandler =(data)=>{
  console.log("onsave data",data)
     const subscriptionData={...data,id:Math.floor(Math.random()*100).toString()}

     
     props.onAddsubscription(subscriptionData);
     console.log("on save",subscriptionData)
     setShowForm(false)
  }

const showFormHandler=()=>{
  setShowForm(true);
  console.log("show form", showForm)
}

const hideFormHandler=()=>{
  setShowForm(false)
}

  return (
    <div className="new_subscription">
   {showForm && <FormSubscription onSave={onSaveHandler} onCancle={hideFormHandler}/>}
   <button type="button" onClick={showFormHandler}>Add New </button>
   
    </div>
    
  )
}

export default NewSubscription