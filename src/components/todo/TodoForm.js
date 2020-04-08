import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrent, saveTodo } from '../../reducers/Todo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


class TodoForm extends Component {

  handleInputChange = (e) => {
    const { updateCurrent } = this.props;
    const val = e.target.value;
    updateCurrent(val);
  }

  handleSubmit = (e) => {
    const { saveTodo, currentTodo } = this.props;
    e.preventDefault();

    saveTodo(currentTodo);
  }

  render () {
    const { props: { currentTodo }, handleInputChange, handleSubmit } = this;

    return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <button className={currentTodo ? 'btn-add ready' : ''}><FontAwesomeIcon icon={faPlus} /></button>
  
        <input type="text" 
          value={currentTodo}
          onChange={handleInputChange}
          placeholder="Add a task">
        </input>
      </form>
    )
  }

}

export default connect(
  (state) => ({ currentTodo: state.todo.currentTodo }),
  { updateCurrent, saveTodo }
)(TodoForm);

