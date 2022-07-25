import { useReducer } from "react";

const initialState = {
  todos: [
    {
      id: 1,
      description: "Scrum meeting at 10 am",
      done: false
    },
    {
      id: 2,
      description: "Burn Jira task at 6pm",
      done: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      console.log("add todo");
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }

    case "UPDATE_TODO": {
      console.log("Update todo");
      let newTodos = [...state.todos];
      newTodos = newTodos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: newTodos
      };
    }
    default:
      return state;
  }
}

export function useTodoReducer() {
  return useReducer(reducer, initialState);
}
