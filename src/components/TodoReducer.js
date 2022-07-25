import { useReducer } from "react";
import { useLocalStorage } from "../hooks/useStorage";

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
  const [todosItems] = useLocalStorage("todos");
  const initialState = {
    todos: todosItems ? todosItems : []
  };

  return useReducer(reducer, initialState);
}
