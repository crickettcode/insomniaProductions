import React, { Component } from 'react'


class Counter extends Component {

    state = {
        count: 0,
        text: "Like?",
        isHovering: false,
        isActive: false
    };

    handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1,
            text: "Very Much"
        }));
    };


    handleMouseOver() {
        this.setState({ isHovering: true, text: "Like?" });
     }
    
    handleMouseOut() {
        this.setState({ isHovering: false, text: "Very Much" });
    }


 render() {

        return (

            <button class="comic"
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this)} onClick={this.handleClick}>{this.state.count}{this.state.text}</button>
         )
    }
}

export default Counter;