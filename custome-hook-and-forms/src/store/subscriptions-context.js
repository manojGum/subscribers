import React from 'react';
const SubscriptionsContextProvider = (props) => {
  return (<SubscriptionsContext.Provider > 
     {props.children}
  </SubscriptionsContext.Provider>)
}
const SubscriptionsContext = React.createContext({subscriptionList:[]})
export default SubscriptionsContext
