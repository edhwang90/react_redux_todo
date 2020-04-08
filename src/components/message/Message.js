import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideMessage } from '../../reducers/Messages';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Message extends Component {

  render () {
    const { props: { message, isError, hideMessage } } = this;

    if (message) {
      return (
        <div className={ isError ? 'toastr error' : 'toastr success'}>
          <span>{message}</span>
          <button onClick={hideMessage}><FontAwesomeIcon icon={faTimes} /></button>
        </div>
      )
    } 
    else return '';
  }
}

export default connect(
  (state) => ({message: state.message.message, isError: state.message.isError}),
  { hideMessage }
)(Message);
