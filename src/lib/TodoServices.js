const env = process.env.REACT_APP_BASE_URL;

export const getTodos = () => {
  return fetch(env)
    .then(res => res.json());
}

export const createTodo = (name) => {
  return fetch(env, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({name: name, isComplete: false})
  })
    .then(res => res.json());
}

export const updateTodo = (todo) => {
  return fetch(`${env}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(res => res.json());
};

export const deleteTodo = (id) => {
  return fetch(`${env}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};