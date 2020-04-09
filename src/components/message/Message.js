import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const Message = (props) => {
  const { id, text, isError, hideMessage } = props;

  return (
    <li className={ isError ? 'toastr error' : 'toastr success'}>
      <span>{text}</span>
      <button onClick={() => { hideMessage(id) }}><FontAwesomeIcon icon={faTimes} /></button>
    </li>
  )
}

export default Message;
