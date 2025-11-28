// src/TodoItem.jsx
import React, { useState } from 'react'

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [dueDate, setDueDate] = useState(todo.due_date)
  const [resolved, setResolved] = useState(todo.resolved)

  const handleEdit = () => {
    const updatedTodo = {
      ...todo,
      due_date: dueDate,
      resolved: resolved,
    }
    editTodo(todo.id, updatedTodo)
    setIsEditing(false)
  }

  return (
    <tr className={`todo-item ${resolved ? 'resolved' : ''}`}>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={todo.title}
            readOnly
          />
        ) : (
          todo.title
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        ) : (
          todo.due_date
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="checkbox"
            checked={resolved}
            onChange={() => setResolved(!resolved)}
          />
        ) : (
          resolved ? 'Yes' : 'No'
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  )
}

export default TodoItem
