import React, { Component } from 'react'


class Counter extends Component {
    constructor(props){
    super(props)
    this.handleClick= this.handleClick.bind(this);
    this.reset= this.reset.bind(this);

    
    this.state = {
       count: 0,
        text: "Like?",
        isHovering: false,
        isActive: false,
        // key:this.state.counter
       
    };
  
    
   

    }

  
      handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1,
            text: "Very Much",
           
        }));
    };

    reset = () => {
        this.setState ({
            count: 0,
            text: "Like?"
        })
    }
   

    handleMouseOver() {
        this.setState({ isHovering: true, text: "Like?"});
     }
    
    handleMouseOut() {
        this.setState({ isHovering: false, text: "Very Much" });
    }
    

 render() {

        return (

            <button class="comic"
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this)} 
                onClick={this.handleClick}>{this.state.count}{this.state.text}
                {this.reset}</button>
         )
    }
}

export default Counter;