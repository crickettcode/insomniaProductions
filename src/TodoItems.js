import React, {Component} from 'react'


// var todoItems = [];
// todoItems.push({index: 1, value: "learn react", done: false});
// todoItems.push({index: 2, value: "Go shopping", done: true});
// todoItems.push({index: 3, value: "buy flowers", done: true});


class TodoItems extends Component {

createTasks = item => {
        return (
          <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
            {item.text}
          </li>
        )
      }
    render() {
      const todoEntries = this.props.entries
      const listItems = todoEntries.map(this.createTasks)
  
      return <ul className="theList">{listItems}</ul>
    }
  }
  
  export default TodoItems
  