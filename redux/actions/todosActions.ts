import { ADD_NEW_TODO, DELETE_TODO } from "../actionTypes"
import { TodoProps } from "@/types/redux/todosReducer";

export const addNewTodoAction = (newTodo: TodoProps) => ({
    type: ADD_NEW_TODO,
    payload: newTodo
})

export const deleteTodoAction = (_id: string) => ({
    type: DELETE_TODO,
    payload: _id
})