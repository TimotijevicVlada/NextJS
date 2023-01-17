import { ADD_NEW_TODO } from "../actionTypes"
import { TodoProps } from "@/types/redux/todosReducer";

export const addNewTodo = (newTodo: TodoProps) => ({
    type: ADD_NEW_TODO,
    payload: newTodo
})