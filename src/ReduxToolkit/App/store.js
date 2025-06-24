import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"


//Always Take Object :
export const store = configureStore({
    reducer: todoReducer,
})