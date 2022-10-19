import './Subscription.css'
import Container from '../templates/Container'
import SubscriptionDate from './SubscriptionDate';
import {useContext, useState} from 'react';
import {Component} from 'react'
import SubscriptionsContext from '../store/subscriptions-context';

class Subscription extends Component{
    static contextType = SubscriptionsContext
    constructor(){
        super(); 
        this.state={ 
            title:'',
            updateTitle:true
        }
    }
    componentDidMount(){
        //logic for setting default title from database
        //equivalent to the useEffect with empty dependency array.
        console.log('In Component Did Mount')
    }
    componentDidUpdate(prevProp,prevState){
        // console.log('The value of context',this.context.subscriptionList)
        // if(prevState.updateTitle !== this.state.updateTitle){
        // console.log('In component did update')
        // }
        //equivalent to the useEffect with some dependency
    }
    componentWillUnmount(){
        console.log('In component will unmount')
        //equivalent to the clean up function in useEffect
    }
     onClickHandler(){
             this.setState({title:'Changed title',updateTitle:false})
                    //  setTitle("Changed Title");
                     console.log("On Button Clicked",this.state.title)            
    }
 render(){
     return(
    //  <SubscriptionsContext.Consumer>
    //      {(ctx) =>{
    //       <ul className="list"> 
    //       {ctx.subscriptionList.map((subscription) =>
    //         "abc" )}
    //       </ul>
    //  }}
     <Container className="subscription" >
    <SubscriptionDate date={this.props.date}/>
    {/* <h2 className="subscription_title">{title}</h2> */}
    <h2 className="subscription_title">{this.props.title}</h2>
    <div className="subscription_price"> {this.props.amount} </div>
    <button type="button" id="changeTitleButton" onClick={this.onClickHandler.bind(this)}>
        Change Title</button>
    </Container>
    // </SubscriptionsContext.Consumer> 
    )
 }
}

// const Subscription = (props)=>{ 
//      const [title,setTitle] = useState(props.title) 
//      const onClickHandler=()=>{
//          setTitle("Changed Title");
//         console.log("On Button Clicked",title)
//      }
//     return (
//         <Container className="subscription" >
//         <SubscriptionDate date={props.date}/>
//         <h2 className="subscription_title">{title}</h2>
//         <div className="subscription_price"> {props.amount} </div>
//         <button type="button" id="changeTitleButton" onClick={onClickHandler}>
//             Change Title</button>
//         </Container>
//     )
// }
export default Subscription