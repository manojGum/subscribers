import './NewSubscription.css';
import {useState} from 'react';
import FormSubscription from './FormSubscription';
import ErrorBoundary from '../ErrorBundary';
const NewSubscription =(props) =>{
    const [showForm,setShowForm]=useState(false)
   const onSaveHandler = (data) =>{
        const subscriptionData={...data,id:Math.random().toString()};
        props.onAddSubscription(subscriptionData)
        console.log("on save", subscriptionData);
        setShowForm(false);
    }
    const showFormHandler=()=>{
        setShowForm(true)
        console.log('show form', showForm)
    }
    const hideFormHandler=()=>{
        setShowForm(false);
    }
    return (
    <ErrorBoundary>
     <div className="new_subscription">
       {showForm &&
       <FormSubscription onSave={onSaveHandler} onCancel={hideFormHandler} /> } 
        <button type="button" className="responsive" onClick={showFormHandler}>Add New</button>
     </div>
     </ErrorBoundary> 
     )
        
}
export default NewSubscription