import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoItem } from './TodoItem';
import { fetchTodos, toggleTodo, destroyTodo, getVisibleTodos } from '../../reducers/Todo';

import './index.scss';

class TodoList extends Component {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  render() {
    const { todos, toggleTodo, destroyTodo } = this.props;

    const todosList = todos.map((todo) => {
      return (
        <TodoItem key={todo.id}
                  toggleTodo={toggleTodo}
                  destroyTodo={destroyTodo}
                  {...todo} />
      )
    });

    return (
      <div className="Todo-List">
        <ul>
          {todosList}
        </ul>
      </div>
    )
  }
}

export default connect (
  (state, ownProps) => ({ todos: getVisibleTodos(state.todo.todos, ownProps.filter) }),
  { fetchTodos, toggleTodo, destroyTodo }
)(TodoList);
