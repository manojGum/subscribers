import React from "react";

const SubscriptionsContext=React.createContext({subscriptionsList:[]})
const SubscriptionsContextProvider=(props)=>{
    return (<SubscriptionsContext.Provider>
        {props.children}
    </SubscriptionsContext.Provider>)
}

 export default SubscriptionsContext
// const cartContext=createContext()
// export const CartContextProvider=({children})=>{
//     return <cartContext.Provider value={0}> {children}</cartContext.Provider>
// }