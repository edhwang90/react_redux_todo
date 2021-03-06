import React, { Component } from 'react';
import Message from './Message';

import { connect } from 'react-redux';
import { hideMessage } from '../../reducers/Messages';


class MessageList extends Component {
  render () {
    const { messages, hideMessage } = this.props;

    const messagesList = messages.map((msg) => {
      return (
        <Message key={msg.id} hideMessage={hideMessage} {...msg}></Message>
      )
    });

    return (
      <ul className="messages-list">
        {messagesList}
      </ul>
    )
  }
}

export default connect (
  (state) => ({ messages: state.message.messages }),
  { hideMessage }
)(MessageList);