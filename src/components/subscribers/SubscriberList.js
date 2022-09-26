
import Container from '../templates/Container'
import './SubscriberList.css'

const SubscriberList=(props)=>{
    return (
        <Container className="Subscribers users">
                 <ul>{props.list.map((item)=>{
          return  <li key={item.id} > 
          <td>name : {item.name}</td> 
          <td>- pincode : {item.pincode}</td>
          <td> email: {item.email}</td>
          </li>
        })}</ul>
   
        </Container>
        )
}


export default SubscriberList