// src/TodoApp.jsx
import { useState, useEffect } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'
import AddTodoForm from './AddTodoForm'

const sidebarLinks = document.querySelectorAll('.sidebar li');
const sections = document.querySelectorAll('.main-content > section');

// SIDEBAR
        // Add event listeners for sidebar navigation
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                const sectionId = this.dataset.section;
                showSection(sectionId);
            });
        });

        function showSection(sectionId) {
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionId + '-section').classList.remove('hidden');
            sidebarLinks.forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === sectionId) {
                    link.classList.add('active');
                }
            });
        }
// To do
const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [newTodo, setNewTodo] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [resolved, setResolved] = useState(false)

  // Fetch todos from the API
  useEffect(() => {
    axios.get('/api/todos/')
      .then((response) => {
        setTodos(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching todos:', error)
        setLoading(false)
      })
  }, [])

  // Add a new to-do
  const addTodo = () => {
    const todoData = {
      title: newTodo,
      due_date: dueDate,
      resolved: resolved,
    }

    axios.post('/api/todos/', todoData)
      .then((response) => {
        setTodos([...todos, response.data])
        setNewTodo('')
        setDueDate('')
        setResolved(false)
      })
      .catch((error) => {
        console.error('Error adding todo:', error)
      })
  }

  // Update a to-do (mark as resolved or change due date)
  const editTodo = (id, updatedData) => {
    axios.put(`/api/todos/${id}/`, updatedData)
      .then((response) => {
        setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)))
      })
      .catch((error) => {
        console.error('Error editing todo:', error)
      })
  }

  // Delete a to-do
  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}/`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id))
      })
      .catch((error) => {
        console.error('Error deleting todo:', error)
      })
  }

  if (loading) return <p>Loading...</p>

  return (
    
    <div className="todo-app">
      <h1>To Do List</h1>
      <div className="todoform">
        <AddTodoForm
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          dueDate={dueDate}
          setDueDate={setDueDate}
          resolved={resolved}
          setResolved={setResolved}
          addTodo={addTodo}/>
      </div>
      <h2>To Do List</h2>
  
      <div className="todo-table-container">
        <table className="todo-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Due Date</th>
              <th>Resolved</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TodoApp
