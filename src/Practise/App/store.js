import { configureStore } from "@reduxjs/toolkit";
import {todoReducers} from "../Features/todo"

export const store = configureStore({
    reducer:todoReducers
})

