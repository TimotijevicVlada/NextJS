import { ActionType } from "../actionTypes"
import { TodoProps } from "@/types/redux/todosReducer";

export const addNewTodoAction = (newTodo: TodoProps) => ({
    type: ActionType.ADD_NEW_TODO,
    payload: newTodo
})

export const updateTodoAction = (updatedTodo: TodoProps) => ({
    type: ActionType.UPDATE_TODO,
    payload: updatedTodo
})

export const checkTodoAction = (_id: string) => ({
    type: ActionType.CHECK_TODO,
    payload: _id
})

export const archiveTodoAction = (_id: string) => ({
    type: ActionType.ARCHIVE_TODO,
    payload: _id
})

export const deleteTodoAction = (_id: string) => ({
    type: ActionType.DELETE_TODO,
    payload: _id
})

export const restoreTodoAction = (_id: string) => ({
    type: ActionType.RESTORE_TODO,
    payload: _id
})