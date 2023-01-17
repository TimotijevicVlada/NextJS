import { ADD_NEW_TODO } from "../actionTypes";
import { TodosReducerProps, TodosActionsProps } from "@/types/redux/todosReducer";

const fakeTodo = [{
    _id: "adwadawdwa",
    subject: "Neki subject",
    content: "Some that I need to do!",
    completed: false,
    created_at: "14.2.2023"
}]

const initialState = {
    todos: fakeTodo
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