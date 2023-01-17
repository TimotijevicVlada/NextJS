import { ADD_NEW_TODO, DELETE_TODO } from "../actionTypes"
import { TodoProps, TodosActionsProps } from "@/types/redux/todosReducer";
import { Dispatch } from "react";

export const addNewTodoAction = (newTodo: TodoProps) => (dispatch: Dispatch<TodosActionsProps>) => {
    dispatch({ type: ADD_NEW_TODO, payload: newTodo });
}

export const deleteTodoAction = (_id: string) => (dispatch: Dispatch<TodosActionsProps>) => {
    console.log("ID IN ACTIONS", _id)
    dispatch({ type: DELETE_TODO, payload: _id });
}