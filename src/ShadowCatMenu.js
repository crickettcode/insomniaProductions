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
      <form className ="box" onClick={this.handleClick}>
        {
            this.props.options.map(option=>(
                <div className ="ten">
                    <input key={option} type="radio" name="src" value={option} /> {option}
                </div>
                
            ))

        }      
  
      </form>
    );
  }
}

export default ShadowCatMenu