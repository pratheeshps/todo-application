import Todo from "./Todo";
export default function Todos({ todos = [], dispatch }) {
  return (
    <ul>
      {todos?.map((todo) => (
        <Todo key={todo.id} {...todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}
