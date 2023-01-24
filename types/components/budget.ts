import { InputsProps } from "../redux/budgetReducer";

export interface BudgetSidebarProps {
    totalAmount: number;
    income: InputsProps[];
    expense: InputsProps[];
}

export interface BudgetFormProps {
    type: string;
    totalAmount: number;
    income: InputsProps[];
    expense: InputsProps[];
}

export interface BudgetBodyProps {
    totalAmount: number;
    income: InputsProps[];
    expense: InputsProps[];
}

export interface TransactionItemProps {
    item: {
        subject: string;
        amount: number;
    },
    isIncome: boolean;
}