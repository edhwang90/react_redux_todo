import { getTodos, createTodo, updateTodo, deleteTodo } from '../lib/TodoServices';
import { showMessage } from './Messages';

const initState = {
  todos: [],
  currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE';
const TODOS_LOAD = 'TODOS_LOAD';
const TODO_ADD = 'TODO_ADD';
const TODO_REPLACE = 'TODO_REPLACE';
const TODO_REMOVE = 'TODO_REMOVE';


export const updateCurrent = (val) => {
  return { type: CURRENT_UPDATE, payload: val};
}

export const loadTodos = (todos) => {
  return { type: TODOS_LOAD, payload: todos }
}

export const addTodo = (todo) => {
  return { type: TODO_ADD, payload: todo }
}

export const replaceTodo = (todo) => {
  return { type: TODO_REPLACE, payload: todo }
}

export const removeTodo = (id) => {
  return { type: TODO_REMOVE, payload: id }
}

export const fetchTodos = () => {
  return (dispatch) => {
    getTodos()
      .then(todos => dispatch(loadTodos(todos)))
      .then(() => dispatch(showMessage({ text: 'Todos loaded', isError: false})))
      .catch((err) => dispatch(showMessage({ text: `${err}`, isError: true})))
  }
}

export const saveTodo = (name) => {
  return (dispatch) => {
    createTodo(name)
      .then(res => dispatch(addTodo(res)))
      .then(() => dispatch(showMessage({ text: 'Todo created', isError: false})))
      .catch((err) => dispatch(showMessage({ text: `${err}`, isError: true})))
  }
}

export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    const { todos } = getState().todo;
    const todo = todos.find(t => t.id === id);
    const toggledTodo = { ...todo, isComplete: !todo.isComplete };

    updateTodo(toggledTodo)
      .then((res) => dispatch(replaceTodo(res)))
      .then(() => dispatch(showMessage({ text: 'Todo updated', isError: false})))
      .catch((err) => dispatch(showMessage({ text: `${err}`, isError: true})))
  }
}

export const destroyTodo = (id) => {
  return (dispatch) => {
    deleteTodo(id)
      .then(() => dispatch(removeTodo(id)))
      .then(() => dispatch(showMessage({ text: 'Todo deleted', isError: false})))
      .catch((err) => dispatch(showMessage({ text: `${err}`, isError: true})))
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case TODOS_LOAD:
      return {
        ...state,
        todos: action.payload,
      }
    case TODO_ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        currentTodo: ''
      }
    case TODO_REPLACE:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
      }
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case CURRENT_UPDATE:
      return {
        ...state,
        currentTodo: action.payload
      }
    default:
      return state
  }
}