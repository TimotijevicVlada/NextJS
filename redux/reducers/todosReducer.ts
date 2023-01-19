import { ActionType } from "../actionTypes";
import { TodosReducerProps, TodosActionsProps } from "@/types/redux/todosReducer";

const initialState = {
    todos: []
}

export const todosReducer = (state: TodosReducerProps = initialState, action: TodosActionsProps) => {
    switch (action.type) {
        case ActionType.ADD_NEW_TODO:
            const newTodos = [action.payload, ...state.todos];
            return {
                ...state,
                todos: newTodos
            }
        case ActionType.DELETE_TODO:
            const deletedTodo = state.todos.filter(item => item._id !== action.payload);
            return {
                ...state,
                todos: deletedTodo
            }
        case ActionType.UPDATE_TODO:
            const updatedTodos = state.todos.map(item => item._id === action.payload._id ? action.payload : item);
            return {
                ...state,
                todos: updatedTodos
            }
        case ActionType.CHECK_TODO:
            const checkTodo = state.todos.map(item => item._id === action.payload ? { ...item, completed: !item.completed } : item)
            return {
                ...state,
                todos: checkTodo
            }
        default:
            return state;
    }
}