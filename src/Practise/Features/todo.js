import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"This is my first todo"}]
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        updateTodo:(state,action) => {
            const {id,newText} = action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if(todo){
                todo.text = newText
            }
        },
        removeTodo:(state,action) => {
            state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo,updateTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducers