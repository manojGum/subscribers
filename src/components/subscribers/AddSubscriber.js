import { useRef, useState } from 'react';
import Button from '../templates/Button';
import Container from '../templates/Container';
import ErrorModal from '../templates/ErrorModal';
import Input from '../templates/Input';
import './AddSubscriber.css'

const AddSubscriber =(props)=>{
const nameInputRef=useRef('Max')
const pincodeInputRef=useRef('')
const [name,setName]=useState('');
const [pincode,SetPincode]=useState('')
const [email,SetEmail]=useState('')
const [error,setError]=useState('');

const onNameChange=(events)=>{
    console.log(" name input:" ,events.target.value)
    setName(events.target.value)

}

const onPincodeChange=(events)=>{
    console.log(" pincode input:" ,events.target.value)
    SetPincode(events.target.value)

}
const onEmailChange=(events)=>{
    console.log(" email input:" ,events.target.value)
    SetEmail(events.target.value)

}


    const onSubmitHandler=(events)=>{
    events.preventDefault();
    if(name.trim().length===0){
        console.log('name input not validated')
        setError({title:"Invalid Name", content:'Name is the mandatroyr field, plese enter name of subscriber'})
        return 
    }
    if(pincode.trim().length<5 || pincode<0){
        console.log('pincode input not validated')
        setError({title:"Invalid pincode", content:'pincode is the mandatroyr field, plese enter pincode of subscriber, pin code will be 5 digits number'})
        return 
    }
    console.log('updated states', name, pincode,email)
    console.log('ref value', nameInputRef.current.value)
    props.onAddSubscriber(nameInputRef.current.value,pincode,email)
    setName('')
    SetPincode('')
    SetEmail('')
        }

    const onCloseHandler=()=>{
        setError(null)
    }
    return (
       <div>
        {/* {error && <ErrorModal title="An Error occured" content="please enter inputs" ></ErrorModal> } */}
        {error && <ErrorModal title={error.title} content={error.content} onclose={onCloseHandler} ></ErrorModal> }
        <form onSubmit={onSubmitHandler}>
            <Container className="input">
                <Input id="name" type="text" label="name" value={name} onChang={onNameChange} />
            {/* <label htmlFor='name'>Name</label>
            <input ref={nameInputRef} id='name' value={name} type="text"  onChange={onNameChange}></input> */}
            <label htmlFor='pincode'>pincode</label>
            <input  ref={pincodeInputRef} id='pincode' value={pincode} type="number" onChange={onPincodeChange} ></input>
            <label htmlFor='email'>Email</label>
            <input id='email' value={email} type="email" onChange={onEmailChange} ></input>
            <Button type='submit'>Save</Button>
            </Container>
           

        </form>
       </div>
    )
}


export default AddSubscriber;