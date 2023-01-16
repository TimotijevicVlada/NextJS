import { ADD_NEW_TODO } from "../actionTypes";
import { TodosReducerProps, TodosActionsProps } from "@/types/redux/todosReducer";

const initialState = {
    todos: []
}

export const todosReducer = (state: TodosReducerProps = initialState, action: TodosActionsProps) => {
    switch (action.type) {
        case ADD_NEW_TODO:
            const tempTodos = [action.payload, ...state.todos];
            return {
                ...state,
                todos: tempTodos
            }
        default:
            return state;
    }
}