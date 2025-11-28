// src/AddTodoForm.jsx
const AddTodoForm = ({ newTodo, setNewTodo, dueDate, setDueDate, resolved, setResolved, addTodo }) => {
  return (
    <div className="add-todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New to-do"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <label>
        Resolved:
        <input
          type="checkbox"
          checked={resolved}
          onChange={() => setResolved(!resolved)}
        />
      </label>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodoForm
