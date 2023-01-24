import { ActionType } from "@/redux/actionTypes";

export interface InputsProps {
    subject: string;
    amount: number;
}

export interface InputsErrorProps {
    subject: string;
    amount: string;
}

export interface BudgetReducerProps {
    totalAmount: number;
    income: InputsProps[];
    expense: InputsProps[];
}

interface AddNewIncomeActionProps {
    type: ActionType.ADD_NEW_INCOME;
    payload: InputsProps;
}

interface AddNewExpenseActionProps {
    type: ActionType.ADD_NEW_EXPENSE;
    payload: InputsProps;
}

export type BudgetActionProps = AddNewIncomeActionProps | AddNewExpenseActionProps;