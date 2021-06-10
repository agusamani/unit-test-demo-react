import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Add from './components/AddTodo/AddTodo';
import EditTodo from './components/EditTodo/EditTodo';

import Nav from './components/Nav/Nav';


export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Nav}/>
        <Route exact path="/" component={Home}/>
        <Route path="/add" component={Add}/>
        <Route exact path="/edit/:id" render={({match}) => <EditTodo match={match}/>}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
