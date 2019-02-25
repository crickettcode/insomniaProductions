import React, {Component} from 'react'




class ShadowCatMenu extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }


handleClick(e){
    const text = e.target.value;
    console.log(text)
    this.props.chooseCasey(text)
}

render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="derp" /> derp
        <input type="radio" name="src" value="halp" /> halp
        <input type="radio" name="src" value="why" /> why
        <input type="radio" name="src" value="bro" /> bro
      </form>
    );
  }
}

export default ShadowCatMenu