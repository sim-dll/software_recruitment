import { useState } from 'react'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Fare il task di Arduino', completed: true },
    { id: 2, text: 'Preparare dockerfile', completed: true },
    { id: 3, text: 'Testare nodi su ROS2', completed: false }
  ]);

  const addTask = (nuovoTesto: string) => {
    // console.log("nuovo task:", nuovoTesto)
    const nuovo = {
      id: Date.now(),
      text: nuovoTesto,
      completed: false
    }
    setTodos([...todos, nuovo])
  }

  const handleToggle = (id: number) => {
    setTodos(todos.map(t => {
      if (t.id === id) {
        return { ...t, completed: !t.completed }
      }
      return t;
    }))
  }

  const handleDelete = (id: number) => {
    // const filtered = todos.filter(t => t.id !== id);
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          My Todo List
        </h1>

        <TodoInput onAdd={addTask} />

        <TodoList 
          items={todos} 
          toggleDone={handleToggle} 
          onDelete={handleDelete} 
        />
        
        {/* <div className="text-xs text-gray-400 mt-4 text-center">v1.0</div> */}
      </div>
    </div>
  )
}

export default App
