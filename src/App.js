import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import Footer from './Footer'
import Button from './Button'
import Counter from './Counter'


class App extends Component {
  constructor() {
    super()
    this.state = {
      items:[],
      currentItem:{text:'',key:''},
      counter:0
      
    }
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
    this.setState(({ counter }) => ({
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
       <Button/>
       <Counter handleClick={this.handleClick}
       counter={this.state.counter}/>
      
      </div>
    );
  }
}

export default App;
