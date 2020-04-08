import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

class Message extends Component {

  render () {
    const { props: { id, text, isError, hideMessage } } = this;

    return (
      <div className={ isError ? 'toastr error' : 'toastr success'}>
        <span>{text}</span>
        <button onClick={() => { hideMessage(id) }}><FontAwesomeIcon icon={faTimes} /></button>
      </div>
    )
  }
}

export default Message;
