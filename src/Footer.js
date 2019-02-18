import React, {Component} from 'react'
import axios from 'axios'
import Counter from './Counter'


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
                        <h2>Its not that Serious...</h2>
    
                        <br />
                        <img width={400} height={300} mode='fit' src={this.state.xkcd.img} />
                        {this.state.xkcd.link}
                        <br />
                        <p>{this.state.xkcd.alt}</p>
                        {/* <Counter/> */}
    
                    </div>
              
            )
        }
    }
    
    

    



export default Footer 