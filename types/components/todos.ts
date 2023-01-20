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
    todos: TodoProps[];
}

export interface TodoSidebarProps {
    completed: boolean;
    setCompleted: (completed: boolean) => void;
}