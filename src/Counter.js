import React, { Component } from 'react'


class Counter extends Component {
    constructor(props){
    super(props)
   
    this.state = {
         text: "Like?",
         isHovering: false,
         isActive: false,
      
    }
  
  }

    handleMouseOver() {
        this.setState({ isHovering: true, text: "Like?"});
     }
    
    handleMouseOut() {
        this.setState({ isHovering: false, text: "Very Much" });
    }
    

 render() {
        
    return (
             <button className="comic"
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this)} 
                onClick={this.props.handleClick}>{this.props.counter}{this.state.text}
                </button>
         )
    }
}

export default Counter;