import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import Footer from './Footer'
import Button from './Button'
import Counter from './Counter'
import SavedTasks from'./SavedTasks'
import ProjectButton from './ProjectButton'
import VideoPlayer from './VideoPlayer'
import Menu from './Menu'
import ShadowCat from './ShadowCat'
import ShadowCatMenu from './ShadowCatMenu'

const VIDEOS = {
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

const NERD = {
  derp:"https://www.youtube.com/embed/Q-KylmbTu78",
  halp:"https://www.youtube.com/embed/MrJDVVUvJ6g",
  why:"https://www.youtube.com/embed/_EWjpg2XIjc",
  bro: "https://www.youtube.com/embed/8EWEv7I8CME"
  };


class App extends Component {
  constructor() {
    super()
    this.chooseVideo=this.chooseVideo.bind(this)
    this.chooseCasey=this.chooseCasey.bind(this)
    this.state = {
      items:[],
      currentItem:{text:'',key:''},
      counter:0,
      src:VIDEOS.cute,
      NERDBRO:NERD.derp
      // count:0
       }
      }

  chooseVideo(newVideo){
  this.setState({
    src:VIDEOS[newVideo]
  })
}

chooseCasey(newCasey){

  this.setState({
    NERDBRO:NERD[newCasey]
  })
}
  
  
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key:
      Date.now() }
      this.setState({
        currentItem, 
      })
    console.log('Hello Input')
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items,newItem]
      this.setState({
        items:items,
        currentItem:{text:'',key:''},
      })
    }
    console.log('Add Item Jerk')
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  handleClick = () => {
    this.setState(({ counter}) => ({
        counter: counter + 1,
        text: "Very Much",
       
    }));
};


reset = () => {
  this.setState ({
      counter: 0,
      text: "Like?"
  })
}

  render() {
    return (
      <div className="App">
       <TodoList addItem={this.addItem}
       inputElement={this.inputElement}
       handleInput={this.handleInput}
       currentItem={this.state.currentItem}/>
       <TodoItems entries={this.state.items}deleteItem={this.deleteItem}/>
       <Footer resetLike={this.reset}/>
       {/* <Button handleClick={this.handleClick}
       counter={this.state.counter}/> */}
       <Counter handleClick={this.handleClick}
       counter={this.state.counter}/>
       <SavedTasks/>
       <ProjectButton/>
       <VideoPlayer src ={this.state.src}/>
       <Menu chooseVideo={this.chooseVideo}/>
     
       <ShadowCat src={this.state.NERDBRO}/>  
       <ShadowCatMenu chooseCasey={this.chooseCasey}/>
      {/* <Like handleClick={this.handleClick}
       count={this.state.count}/> */}
       
     </div>
    );
  }
}

export default App;
