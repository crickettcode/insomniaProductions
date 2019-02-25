import React, {Component} from 'react';
import Button from './Button';
import ReactDOM from 'react-dom';
import { NONAME } from 'dns';

class ProjectButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      color:[6,100,85]
    
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;

  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  
  handleClick() {
    this.setState({
      color:this.chooseColor()
    })
  }

  render() {
    return (
      <div>
         <h6 className={this.isLight() ? 'white' : 'black'}>
            {/* {this.formatColor(this.state.color)}} */}
         </h6> 
<Button onClick ={this.handleClick} light ={this.isLight()}/>
      </div>
    );
  }
}

export default ProjectButton;