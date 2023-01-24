import { InputsProps } from "../redux/budgetReducer";

export interface BudgetSidebarProps {
    totalAmount: number;
    income: InputsProps[];
    expense: InputsProps[];
}

export interface BudgetFormProps {
    type: string;
    totalAmount: number;
}

export interface BudgetBodyProps {
    totalAmount: number;
}