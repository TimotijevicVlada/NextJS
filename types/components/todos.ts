import { TodoProps } from "../redux/todosReducer";

export interface TodoItemProps {
    index: number;
    todo: TodoProps;
}

export interface CreateTodoProps {
    close: () => void;
}