import { ActionType } from "../actionTypes";
import { TodosReducerProps, TodosActionsProps } from "@/types/redux/todosReducer";

const initialState = {
    todos: [],
    archived: []
}

export const todosReducer = (state: TodosReducerProps = initialState, action: TodosActionsProps) => {
    switch (action.type) {
        case ActionType.ADD_NEW_TODO:
            const newTodos = [action.payload, ...state.todos];
            return {
                ...state,
                todos: newTodos
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
        case ActionType.ARCHIVE_TODO:
            const deletedTodo = state.todos.filter(item => item._id !== action.payload);
            const findArchived = state.todos.find(item => item._id === action.payload);
            const newArchived = findArchived ? [findArchived, ...state.archived] : state.archived;
            return {
                ...state,
                todos: deletedTodo,
                archived: newArchived
            }
        case ActionType.DELETE_TODO:
            const deleted = state.archived.filter(item => item._id !== action.payload);
            return {
                ...state,
                archived: deleted
            }
        case ActionType.RESTORE_TODO:
            const newArchive = state.archived.filter(item => item._id !== action.payload);
            const index = state.archived.findIndex(item => item._id === action.payload);
            const newRestoredTodos = [state.archived[index], ...state.todos];
            return {
                ...state,
                todos: newRestoredTodos,
                archived: newArchive
            }
        default:
            return state;
    }
}