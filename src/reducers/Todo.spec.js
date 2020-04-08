import reducer from './Todo';

describe('Todo reducer', () => {

  test('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING' });
    expect(result).toBeDefined();
  });

  test('adds a todo', () => {
    const startState = {
      todos: [
        { id: 1, name: 'one', isComplete: true },
        { id: 2, name: 'two', isComplete: true },
        { id: 3, name: 'three', isComplete: false }
      ]
    };

    const expectedState = {
      todos: [
        { id: 1, name: 'one', isComplete: true },
        { id: 2, name: 'two', isComplete: true },
        { id: 3, name: 'three', isComplete: false },
        { id: 4, name: 'four', isComplete: false }
      ]
    };

    const toAdd = { id: 4, name: 'four', isComplete: false };
    const action = { type: 'TODO_ADD', payload: toAdd };

    const result = reducer(startState, action);

    expect(result).toEqual(expectedState);
  });
})