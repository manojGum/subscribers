
import { useState } from 'react';
import './App.css';
import AddSubscriber from './components/subscribers/AddSubscriber';
import SubscriberList from './components/subscribers/SubscriberList';
import Container from './components/templates/Container';

function App() {
  const [subscriberList, setSubscriberList]=useState([])
  const  onAddSubscriberHandler=(sname,spincode,email)=>{
    setSubscriberList((prevState)=>{
      return [...prevState,{name:sname, pincode:spincode ,email:email, id:Math.random().toString()}]
    })
  }
  return (
      <Container>
      <AddSubscriber onAddSubscriber={onAddSubscriberHandler} />
      <SubscriberList list={subscriberList} />
      </Container>
  );
}

export default App;
