import React from 'react';
import { Checkbox } from '../checkbox/Checkbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const TodoItem = (props) => {
  const { id, name, isComplete, toggleTodo, destroyTodo } = props;
  
  return (
    <li className={'todo-row isComplete-' + isComplete}>
      <Checkbox toggleProp={isComplete}
                label={name}
                id={id}
                handleToggle={() => { toggleTodo(id) }}>
      </Checkbox>

      <div className="action-bar">
        <button className="btn-remove" onClick={() => { destroyTodo(id) }}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </li>
  )
}