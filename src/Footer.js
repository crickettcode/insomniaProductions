import React, {Component} from 'react'
import axios from 'axios'


class Footer extends Component {

        state = {
            xkcd: {}
        }
    
   
    
        getXkcd = async () => {
            const random = Math.floor((Math.random() * 2000) + 1);
            const xkcd = await axios.get(`https://xkcd.now.sh/${random}`)
            this.setState({
                xkcd: xkcd.data,
                bgColor: 'black'
    
            })
    
        }
    
        render() {
          
            return (
                
                    <div>
                        <button class="comic"onClick={this.getXkcd}style={{backgroundColor:this.state.bgColor}}>Comic</button>
                        <h1>Its not that Serious...</h1>
    
                        <br />
                        <img src={this.state.xkcd.img} />
                        {this.state.xkcd.link}
                        <br />
                        <h2>{this.state.xkcd.alt}</h2>
    
                    </div>
              
            )
        }
    }
    
    

    



export default Footer 