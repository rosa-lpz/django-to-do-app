import React from 'react'
import TodoApp from './TodoApp'

const App = () => {
  return (
  <div className="main-content">

    <section id="data-preview-section" class="hidden">
            <h2>To Do List</h2>
             <TodoApp />
            <div id="data-table-container"></div>
            <div class="pagination">
                <button onclick="prevPage()">Previous</button>
                <span id="page-number">1</span>
                <button onclick="nextPage()">Next</button>
            </div>
        </section>
  </div>
  )
}

export default App


//div className="main-content">
  //  <TodoApp />
  // </div>

