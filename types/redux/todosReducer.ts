import { ADD_NEW_TODO } from "@/redux/actionTypes";

export interface TodoProps {
    _id: string;
    todo: string;
    completed: false;
    created_at: string;
}

export interface TodosProps {
    todos: TodoProps[];
}

export interface TodosReducerProps {
    todos: TodoProps[];
}

export interface TodosActionsProps {
    type: typeof ADD_NEW_TODO;
    payload: TodoProps;
}