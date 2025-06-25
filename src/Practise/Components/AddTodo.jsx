import React,{useState} from 'react'
import { addTodo } from '../Features/todo'
import { useDispatch } from 'react-redux'

function AddTodo() {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()

    const addHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }

  return (
    <div>
        <form onSubmit={addHandler} className='flex justify-center items- gap-x-5 center w-full max-w-md p-5 outline-none focus:border-blue-500 focus:ring-blue-400 mx-auto my-12 bg-white'>
            <input type="text" 
            className='w-full max-w-md p-2 rounded bg-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500'
        value={input}
        onChange={(e) => setInput(e.target.value)}/>
        <button type='submit' className='bg-red-400 p-2 rounded-xl '>
            Add
        </button>
        </form>
    </div>
  )
}

export default AddTodo