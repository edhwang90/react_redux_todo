import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import { Header } from'./components/header/Header';
import Message from './components/message/Message';
import { hideMessage } from './reducers/Messages';


class App extends Component {
  render () {
    const { message, isError } = this.props;

    return (
      <div className="app">
        <Header></Header>
        <Message message={message} isError={isError}></Message>
        <div className="app-content">
          <h1>To-Do List</h1>
          <TodoList></TodoList>
          <TodoForm></TodoForm>
        </div>
      </div>
    );
  }
}

// export default connect(
//   (state) => ({message: state.message.message, isError: state.message.isError})
// )(App);

export default App;