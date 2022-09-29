import './Input.css'

const Input=(props)=>{
    return (
        <div className='input'>
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={props.ref} id={props.id} value={props.ref} type={props.type}  onChange={props.onNameChange}></input>

        </div>

    )
}


export default Input;