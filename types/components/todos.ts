import { TodoProps } from "../redux/todosReducer";

export interface TodoItemProps {
    index: number;
    todo: TodoProps;
    filter: string;
}

export interface CreateTodoModalProps {
    close: () => void;
}

export interface UpdateTodoModalProps {
    itemToUpdate: TodoProps;
    close: () => void;
}

export interface TodoContentProps {
    filter: string;
    todos: TodoProps[];
}

export interface TodoSidebarProps {
    filter: string;
    filterData: (filter: string) => void;
    setSearch: (search: string) => void;
}

export interface ErrorProps {
    subject: boolean;
    content: boolean;
}

export interface InputProps {
    subject: string;
    content: string;
}