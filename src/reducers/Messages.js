const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS';
const MESSAGE_ERROR = 'MESSAGE_ERROR';
const MESSAGE_REMOVE = 'MESSAGE_REMOVE';

export const displayMessage = (msg) => ({ type: msg.isError ? MESSAGE_ERROR : MESSAGE_SUCCESS, payload: msg.text });
export const hideMessage = () => ({ type: MESSAGE_REMOVE, payload: '' });

export const showMessage = (msg) => {
  return (dispatch) => {
    dispatch(displayMessage(msg));
    
    setTimeout(() => {
      dispatch(hideMessage());
    }, 3000)
  }
}

export default (state = { message: '', isError: true }, action) => {
  switch (action.type) {
    case MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isError: false
      }
    case MESSAGE_ERROR:
      return {
        ...state,
        message: action.payload,
        isError: true
      }
    case MESSAGE_REMOVE:
      return {
        ...state,
        message: ''
      }
    default:
      return state;
  }
}