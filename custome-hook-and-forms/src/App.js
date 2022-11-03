import './App.css';
import {useState,useEffect,useCallback} from 'react';
import Container from './templates/Container'
import NewSubscription from './Subscription/NewSubscription/NewSubscription'
import Filter from './Subscription/Filter';
import SubscriptionList from'./Subscription/SubscriptionList';
import SubscriptionChart from './Subscription/SubscriptionChart';
import SubscriptionsContext from './store/subscriptions-context';
import useTime from './hooks/time';
import useSendRequest from './hooks/sendRequest';
const INITIAL_SUBSCRIPTION=[
  ]

const App = () => {
const [subscriptions,setSubscriptions]=useState(INITIAL_SUBSCRIPTION)
const [filteredYear,setFilteredYear]=useState('2020');
const [isLoading,setIsLoading]=useState(false);
const [error,setError]=useState('');

useEffect(()=>{
  if(localStorage.getItem('filteredYear')){
    setFilteredYear(localStorage.getItem('filteredYear'))
    console.log('in useEffect',localStorage.getItem('filteredYear'))
  }
},[]);
const currentTime=useTime();

const addSubscriptionHandler=async (data)=>{
  try{
   const postResponse = await fetch('https://react-workspace-default-rtdb.firebaseio.com/subscriptions.json',
   {
     method:'POST',
     body:JSON.stringify(data),
     headers:{'content-type':'application/json'}
   })
  
   const dataStored= await postResponse.json()
   console.log("on add Subscription",dataStored)
   setSubscriptions(prevState=>{return [data,...subscriptions]});
  }
  catch(error){
    // setError(error.message);
  }

}
const filterChangeHandler =(data)=>{
  setFilteredYear(data);
   localStorage.setItem('filteredYear',data)
   console.log('filter Change handler', data)
}
const filteredSubscriptions=subscriptions.filter((item)=>{
  return new Date(item.date).getFullYear().toString() === filteredYear
})

// // const {isLoading,error,sendRequest:sendFetchApi}=useSendRequest();
// // const handleFetcheData=useCallback((data)=>{
// //   let fetchedSubscriptions=[] 
// //       for(let key in data){
// //         // console.log('value for',key,data[key])
// //        fetchedSubscriptions.push(data[key])
// // }
// // setSubscriptions(fetchedSubscriptions);
// // },[])

// // const {isLoading,error, sendRequest:sendFetchApi}= useSendRequest(handleFetcheData);


// const fetchListHandler= useCallback(()=>{

//   // sendFetchApi({url:'https://react-workspace-default-rtdb.firebaseio.com/subscriptions.json'})

// },[sendFetchApi,handleFetcheData])


const fetchListHandler= useCallback(()=>{
  setIsLoading(true);
  fetch('https://react-workspace-default-rtdb.firebaseio.com/subscriptions.json').then(  
      (response)=>{
        console.log('fetched data', response,response.json)
        return response.json()
    }).then((data)=>{
      let fetchedSubscriptions=[] 
      for(let key in data){
        // console.log('value for',key,data[key])
       fetchedSubscriptions.push(data[key])
      }
      console.log('transformed data',fetchedSubscriptions);
      setSubscriptions(fetchedSubscriptions);
      setIsLoading(false);
    }).catch((error)=>
      {
      setError(error.message);
      console.log('Error catched', error.message);
      setIsLoading(false)
      }
    );
},[])


// let content=<h3>No data found</h3>;
// if(filteredSubscriptions.length!==0){
//   content= filteredSubscriptions.map((subscription) =>
//   <Subscription key={subscription.id} date={subscription.date}  
//   title={subscription.title} amount={subscription.amount} />)
// }
  return (
    <SubscriptionsContext.Provider value={{subscriptionList:filteredSubscriptions}}>
      <Container>
        <button type="button" onClick={fetchListHandler}>Fetch List</button>
        <span className="current-time">{currentTime}</span>
        <NewSubscription onAddSubscription={addSubscriptionHandler}/>
        <Filter onFilterChange={filterChangeHandler} selectedFilter={filteredYear}/>
        <SubscriptionChart filteredSubscriptions ={filteredSubscriptions}/>
        {!isLoading && !error && filteredSubscriptions.length>0  && <SubscriptionList/>}
        {!isLoading && filteredSubscriptions.length===0 && <p class="list_no_data">No data found from server</p>}
        {isLoading && <p>Please wait while we load your data..</p>}
        {!isLoading && error && <p> Something went wrong </p>}
        </Container>
        {/* {content} */}

        {/* {filteredSubscriptions.length===0 && <h3>No data found</h3>}
        {filteredSubscriptions.length !== 0 &&
         filteredSubscriptions.map((subscription) =>
         <Subscription key={subscription.id} date={subscription.date}  
         title={subscription.title} amount={subscription.amount} />) } */}
       
        {/* {filteredSubscriptions.length===0 ? <h3>No data found</h3>:
         filteredSubscriptions.map((subscription) =>
         <Subscription key={subscription.id} date={subscription.date}  
         title={subscription.title} amount={subscription.amount} />)
        } */}
        
        {/* {filteredSubscriptions.map((subscription) =>
        <Subscription key={subscription.id} date={subscription.date}  
        title={subscription.title} amount={subscription.amount} />)} */}
        
        {/* <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
        <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
        <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/> */}
    </SubscriptionsContext.Provider>
  );
}

export default App;
