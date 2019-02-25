import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import Footer from './Footer'
import Button from './Button'
import Like from './Like'
import Counter from './Counter'
import SavedTasks from'./SavedTasks'
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProjectButton from './ProjectButton';
import VideoPlayer from './VideoPlayer'
import Menu from './Menu'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/Footer"component={Footer} />
        <Route path="/TodoList" component={TodoList} />
        <Route path="/SavedTasks" component={SavedTasks} />
        <Route path="/Button" component={Button} />
        <Route path="/Like" component={Like} />
        <Route path ="/ProjectButton" component={ProjectButton}/>
        <Route path ="/VideoPlayer" component={VideoPlayer}/>
        <Route path="/Menu" component={Menu}/>
       </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'))




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
