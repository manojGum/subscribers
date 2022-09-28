
import './App.css';
import Container from './components/Template/Container';
// import BooksList from './components/BooksList';
// import StudentList from './components/StudentList';
// import Subscription from './components/Subscription'
import NewSubscription from './components/NewSubscription/NewSubscription';
import Filter from './components/Filter';
import { useEffect, useState } from 'react';
import SubscriptionList from './components/subscription/SubscriptionList';
import SubscriptionsContext from './store/subscriptions-context';
// some time
// import SubscriptionChart from './components/subscription/SubscriptionChart';

const INITIAL_SUBSCRIPTION=[
  {
    id:"1",
    date: (new Date('2023','03','23')),
    title:"Monthly Subscription",
    amount:"125.06"
  },
  {
    id:"2",
    date:(new Date('2022','04','24')),
    title:"Monthly Subscription",
    amount:"425.06"
  },
  {
    id:"3",
    date: (new Date('2021','05','25')),
    title:"Monthly Subscription",
    amount:"125.06"
  },
  {
    id:"3",
    date: (new Date('2020','05','25')),
    title:"Monthly Subscription",
    amount:"125.06"
  } ,
  {
    id:"3",
    date: (new Date('2022','05','25')),
    title:"Monthly Subscription",
    amount:"450.06"
  }
]

function App() {
  const [subscriptions , setSubscription]=useState(INITIAL_SUBSCRIPTION)
  
  const [filteredYear, setFilteredYear]=useState("2022");


useEffect(()=>{
  if(localStorage.getItem('filteredYear')){

    setFilteredYear(localStorage.getItem('filteredYear'))
    console.log(localStorage.getItem('filteredYear'))
  }
},[])



  const addsubscriptionHandler=(data)=>{
    // // subscription.push(data)
    // setSubscription([data,...subscription])
    setSubscription(prevState=>{return [data,...subscriptions]})
    console.log("on add subscription ", data)
 
    
  }

  // let date = (new Date('2022','03','23'));
  // let title="Monthly Subscription";
  // let amount='125.60';

  const filterChangeHandler=(data)=>{
    setFilteredYear(data)
    localStorage.setItem('filteredYear',data)
    // console.log("filter change handler",data)
    
  }
const filterSubscriptions=subscriptions.filter((item)=>{
  return item.date.getFullYear().toString()===filteredYear
})

// let content=<h1>No data found</h1>
// if(filterSubscriptions.length !==0)
// {
//  content= filterSubscriptions.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)
// }
  return (
    <SubscriptionsContext.Provider  value={{subscriptionsList:[]}}>
      <Container>
         <NewSubscription  onAddsubscription={addsubscriptionHandler} />
         <Filter onFilterChange={filterChangeHandler} selectedFilter={filteredYear}  />
       
       
       


         {/* some times */}

 {/* <SubscriptionChart filterSubscriptions={filterSubscriptions}/> */}

         {/* <SubscriptionChart filteredSubscription={filterSubscription} /> */}
          {/* <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
          <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
          <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/> */}
          {/* you also write 2 */}
           {/* {filterSubscriptions.map((subscription)=>{
        return <Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>})} */}
{/* you also used it 3  */}
      {/* {
        filterSubscriptions.length===0 ? <h1>No Data Found</h1> :filterSubscriptions.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)
      } */}

{/* second approch 4 */}
      {/* {
         filterSubscriptions.length===0 && <h1>No Data Found</h1> 
      }
      {
        filterSubscriptions.length !==0 && filterSubscriptions.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>) 
      } */}
       

      {/* fort approch 5 */}
      {/* {
        content

       } */}



       {/* third approch  6 */}
       
{/* some time */}
       <SubscriptionList subscriptions={filterSubscriptions}/>
       

        {/* {subscriptions.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)} */}
        {/* {filterSubscription.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)} */}
       
      </Container>
      </SubscriptionsContext.Provider  >
  );
}

export default App;
