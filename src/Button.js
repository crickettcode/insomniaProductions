import React, {Component} from 'react'
import Counter from './Counter'




class Button extends Component {
    constructor(props){
        super(props)
    }

   





render() {
        
    return (
        
       <Counter handleClick={this.props.handleClick}
       counter={this.props.counter}/>
      
    )
}
}










export default Button;