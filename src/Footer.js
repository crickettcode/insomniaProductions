import React, {Component} from 'react'
import axios from 'axios'



class Footer extends Component {
    constructor(props) {
        super(props);
  
    }
        state = {
            xkcd: {},

           }
         
           getXkcd = async () => {
            const random = Math.floor((Math.random() * 2000) + 1);
            const xkcd = await axios.get(`https://xkcd.now.sh/${random}`)
            this.props.resetLike()
            this.setState({
                xkcd: xkcd.data,
                bgColor: 'black'
    
            })
           
        }
        
    
        render() {
          
            return (
                
                    <div>
                        
                        <button className="comic"
                        onClick={this.getXkcd}
                        style={{backgroundColor:this.state.bgColor}}>Comic</button>
                        <h2>Its not that Serious...</h2>
    
                        <br />
                        <img width={400} height={300} mode='fit' src={this.state.xkcd.img} />
                        {this.state.xkcd.link}
                        <br />
                       <h5>{this.state.xkcd.alt}</h5>
                      
                      </div>
            )
        }
    }
    
    

    



export default Footer 