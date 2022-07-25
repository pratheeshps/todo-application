export default function Todo({ id, description, done, dispatch }) {
  const handleTodoClick = () => {
    dispatch({
      type: "UPDATE_TODO",
      payload: id
    });
  };
  return (
    <li onClick={handleTodoClick} className={`${done ? "done" : ""}`}>
      {description}
    </li>
  );
}
