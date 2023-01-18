import { ADD_NEW_TODO, DELETE_TODO, UPDATE_TODO, CHECK_TODO } from "@/redux/actionTypes";

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


//REDUCER PROPS
interface AddNewTodoActionProps {
    type: typeof ADD_NEW_TODO;
    payload: TodoProps;
}

interface DeleteTodoActionProps {
    type: typeof DELETE_TODO;
    payload: string;
}

interface UpdateTodoActionProps {
    type: typeof UPDATE_TODO;
    payload: TodoProps;
}

interface CheckTodoActionProps {
    type: typeof CHECK_TODO;
    payload: string;
}

export type TodosActionsProps = AddNewTodoActionProps | DeleteTodoActionProps | UpdateTodoActionProps | CheckTodoActionProps;