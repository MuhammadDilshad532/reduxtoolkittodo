import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from "../features/todo/todoSlice"
const Todo = () => {
   const todos = useSelector(state => state.Todos.todos)
   const dispatch =useDispatch()
  return (
    <>
      <div>todo</div>
      {todos.map((todo) =>(
        <li key={todo.id}>
            {todo.text}
            <button onClick={()=> dispatch(removeTodo(todo.id))} className='bg-slate-500 w-9 h-9 ml-5 mt-4 rounded-full text-white'>X</button>
        </li>
      ))}
    </>
  )
}

export default Todo
