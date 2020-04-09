import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TodoForm from './components/todo-form/TodoForm';
import TodoList from './components/todo/TodoList';
import { Header } from'./components/header/Header';
import MessageList from './components/message/MessageList';

import './App.scss';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="app">
          <Header></Header>
          <MessageList></MessageList>
          <div className="app-content">
            <h1>To-Do List</h1>
            <Route path="/:filter?" render={({match}) => (
              <TodoList filter={match.params.filter}></TodoList>
            )}></Route>
            <TodoForm></TodoForm>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;