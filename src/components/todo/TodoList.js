import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TodoItem } from './TodoItem';
import { fetchTodos, toggleTodo, destroyTodo } from '../../reducers/Todo';

//import { fetchTodos, toggleTodo, deleteTodo, getVisibleTodos } from '../../reducers/todo';

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
  (state) => ({ todos: state.todo.todos }),
  { fetchTodos, toggleTodo, destroyTodo }
)(TodoList);

// export default connect(
//   (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
//   {fetchTodos, toggleTodo, deleteTodo}
// )(TodoList)