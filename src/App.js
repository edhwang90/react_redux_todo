import React, { Component } from 'react';
import './App.scss';

import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import { Header } from'./components/header/Header';
import MessageList from './components/message/MessageList';

class App extends Component {
  render () {
    return (
      <div className="app">
        <Header></Header>
        <MessageList></MessageList>
        <div className="app-content">
          <h1>To-Do List</h1>
          <TodoList></TodoList>
          <TodoForm></TodoForm>
        </div>
      </div>
    );
  }
}

export default App;