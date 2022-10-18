import './SubscriptionDate.css';
function SubscriptionDate(props)
{
    const month= new Date(props.date).toLocaleString('default',{month:'long'})
 const day= new Date(props.date).toLocaleString('default',{day:'2-digit'})
 const year=new Date(props.date).getFullYear();
    return (
        <div className='date'>
          <div className='month'>{month}</div>
        <div className='day'>{day}</div>
        <div className='year'>{year}</div>
        </div>
    )
}

export default SubscriptionDate;