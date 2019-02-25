import React, {Component} from 'react'
// import Counter from './Counter'




class Button extends Component {
    constructor(props){
        super(props)
    }
    

   
render() {
        
    return (
        
        <div>
            	<button className="comic" onClick = {this.props.onClick}
                // className ={ this.props.light ? 'light-button' : 'dark-button' }
                
				>Whoa
			</button>
            </div>
      
    //    {/* <Counter handleClick={this.props.handleClick}
    //    counter={this.props.counter}/>
    
    )
}
}










export default Button;