import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/Todo';
import messageReducer from './reducers/Messages';

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer
});

export default createStore(
  reducer,
  applyMiddleware(thunk)
);