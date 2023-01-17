import { ADD_NEW_TODO, DELETE_TODO } from "@/redux/actionTypes";

export interface TodoProps {
    _id: string;
    subject: string;
    content: string;
    completed: boolean;
    created_at: string;
}

export interface TodosProps {
    todos: TodoProps[];
}

export interface TodosReducerProps {
    todos: TodoProps[];
}

export interface TodosActionsProps {
    type: typeof ADD_NEW_TODO | typeof DELETE_TODO;
    payload: TodoProps | string;
}