
import {Component} from 'react'
class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state={error:false}
    }
  componentDidCatch(error){
       this.setState({error:true})
  }
  render(){
      if(this.state.error){
          return <h2>Some Error Encountered</h2>
      }
      return this.props.children
  }

}
export default ErrorBoundary