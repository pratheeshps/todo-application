import { useRef } from "react";
import Todos from "./Todos";
import { useTodoReducer } from "./TodoReducer";

export default function TodoList() {
  const [state, dispatch] = useTodoReducer();
  const { todos } = state;
  const addInputRef = useRef();
  const handleAddTodo = () => {
    const value = addInputRef.current.value;
    if (value) {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: +new Date(),
          description: value
        }
      });
      addInputRef.current.value = "";
    }
  };
  return (
    <div>
      <h3>Todos</h3>
      <div>
        <input placeholder="Enter todo" ref={addInputRef} />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
      <div>
        <Todos todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
}
