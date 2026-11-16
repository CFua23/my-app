import './Todo.css'

function Todo({title}) {
  function deleteTodo() {
    // TODO: implement delete logic
  }

  return (
    <div className="todo">
      <p>{title}</p>
      <button onClick={() => deleteTodo}>Delete</button>
    </div>
  )
}

export default Todo;