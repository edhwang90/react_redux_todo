import React, { Component } from 'react';
//import { connect } from 'react-redux';

class Message extends Component {

  render () {
    const { props: { message, isError } } = this;

    if (message) {
      return (
        <div className={ isError ? 'toastr error' : 'toastr success'}>
          <span>{message}</span>
        </div>
      )
    } 
    else return '';
  }
}

export default Message;

// export default connect(
//   (state) => ({message: state.message.message, isError: state.message.isError})
// )(Message);