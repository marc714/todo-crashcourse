import { useState } from 'react'
import { useEffect } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import './output.css'
import FormAdd from './components/FormAdd'
import { nanoid } from 'nanoid'
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if(localValue == null) return [];

    return JSON.parse(localValue);
  })

  useEffect(()=> {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  

  function addTodo(title){
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: nanoid(), title, completed: false}
      ]
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(element => element.id !== id)
    })
    // array filter returns a shallow copy. it creates and returns a new array.
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  return (
    <div className="container">
      <h1>To Do List</h1>

      <FormAdd onSubmit={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onChange={toggleTodo}/>
      
    </div>
  )

}

export default App
