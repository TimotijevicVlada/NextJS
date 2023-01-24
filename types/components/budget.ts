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

export interface TransactionItem {
    _id: string;
    type: string;
    subject: string;
    amount: number;
}
export interface TransactionItemProps {
    item: TransactionItem;
    isIncome: boolean;
}