import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {


  return (
    <>
    <div className='flex flex-col justify-center items-center mt-36'>
      <h1>Todo List</h1>
      <AddTodo />
      <Todo />
      </div>
    </>
  )
}

export default App
