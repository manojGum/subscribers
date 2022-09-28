
import { useContext } from 'react';
import SubscriptionsContext from '../../store/subscriptions-context';
import Subscription from '../Subscription';
import "./SubscriptionList.css";

const SubscriptionList = (props) => {
    const ctx=useContext(SubscriptionsContext)
   
// if(props.subscriptions.length ===0) { return <h1 className='list_no_data'>No data found</h1> }
if(ctx.subscriptionsList.length ===0) { return <h1 className='list_no_data'>No data found</h1> }


return (
   
//     <ul className='list' >
// {
// props.subscriptions.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)
// }
// </ul>

// second approch
//     <SubscriptionsContext.Consumer>
// {(ctx)=>{

// <ul className='list' >
// {
// ctx.subscriptionsList.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)
// }
// </ul>
// }}
    
   
//     </SubscriptionsContext.Consumer>

// third approch

<ul className='list' >
{
ctx.subscriptionsList.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)
}
</ul>
)

}

export default SubscriptionList;


// first approch
// import Subscription from '../Subscription';
// const SubscriptionList=(props)=>{

//     let content=<h1>No data found</h1>
//  if(props.subscriptions.length !==0){
    
//          content= props.subscriptions.map(subscription=><Subscription date={subscription.date} title={subscription.title} amount={subscription.amount} key={subscription.id}/>)
      
// }
//     return(
//         <>
//         {content}
//         </>
       
//     );
// }


// export default SubscriptionList;