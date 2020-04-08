const initState = {
  messages: []
};

const MESSAGE_DISPLAY = 'MESSAGE_DISPLAY';
const MESSAGE_REMOVE = 'MESSAGE_REMOVE';

const generateId = () => Math.floor(Math.random()*10000);

export const displayMessage = (msg) => ({ type: MESSAGE_DISPLAY, payload: msg});
export const destroyMessage = (id) => ({ type: MESSAGE_REMOVE, payload: id });

export const showMessage = (msg) => {
  const newMessage = { id: generateId(), text: msg.text, isError: msg.isError }
  
  return (dispatch) => {
    dispatch(displayMessage(newMessage));

    setTimeout(() => {
      dispatch(destroyMessage(newMessage.id));
    }, 2500)
  }
}

export const hideMessage = (id) => {
  return (dispatch) => {
    dispatch(destroyMessage(id));
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case MESSAGE_DISPLAY:
      return {
        ...state,
        messages: [action.payload, ...state.messages]
      }
    case MESSAGE_REMOVE:
      return {
        ...state,
        messages: state.messages.filter(msg => msg.id !== action.payload)
      }
    default:
      return state;
  }
}