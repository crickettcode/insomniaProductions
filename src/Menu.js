import React, {Component} from 'react'
import './index.css';




class Menu extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }


handleClick(e){
    const text = e.target.value;
    console.log(text)
    this.props.chooseVideo(text)
}

render() {
    return (
      <form className="form" onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="cute" defaultChecked ="cute"/> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}

export default Menu