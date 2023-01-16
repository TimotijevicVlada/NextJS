import { BudgetReducerProps } from "./budgetReducer";
import { TodosReducerProps } from "./todosReducer";


export interface AllReducersProps {
    budgetReducer: BudgetReducerProps;
    todosReducer: TodosReducerProps;
}