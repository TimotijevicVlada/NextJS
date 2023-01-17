import { ADD_NEW_TODO, DELETE_TODO } from "../actionTypes";
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
            const newTodos = [action.payload, ...state.todos];
            return {
                ...state,
                todos: newTodos
            }
        case DELETE_TODO:
            const deletedTodo = state.todos.filter(item => item._id !== action.payload);
            return {
                ...state,
                todos: deletedTodo
            }
        default:
            return state;
    }
}