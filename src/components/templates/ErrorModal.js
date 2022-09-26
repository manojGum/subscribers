import Button from './Button'
import Container from './Container'
import './ErrorModal.css'

const ErrorModal=(props)=>{
    return(
        <div className='backdrop' onClick={props.onclose}>
        <Container className="modal">
            <header className='header'>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p className='content'>{props.content}</p>
            </div>
            <footer className='action' onClick={props.onclose}><Button>Okey</Button></footer>
        </Container>
        </div>
    )
}

export default ErrorModal