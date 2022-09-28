import React, {useState} from 'react'
import Container from './Template/Container'
import "./Subscription.css"
import SubscriptionDate from './SubscriptionDate'

const Subscription = (props) => {
//   const month= props.date.toLocaleString('default',{month:'long'})
//  const day= props.date.toLocaleString('default',{day:'2-digit'})
//  const year=props.date.getFullYear();
const [title,SetTitle]= useState(props.title);
// let title=props.title
const  onClickHandler=()=>{
  // title="change title"
  SetTitle("change Title");
  console.log("onclinek button")
}
  return (
    <Container className='subscription'>
        {/* <div className=''>{props.date.toISOString()}</div> */}
        {/* <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div> */}
        <SubscriptionDate date={props.date}/>
        <h2 className='subscription_title'>{title}</h2>
        
      <div className='subscription_price'>{props.amount}</div>
        <button type='button' onClick={onClickHandler}> Change Title</button>
    </Container>
  )
}

export default Subscription