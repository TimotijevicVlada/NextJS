import { TodoProps } from "../redux/todosReducer";

export interface TodoItemProps {
    index: number;
    todo: TodoProps;
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
}