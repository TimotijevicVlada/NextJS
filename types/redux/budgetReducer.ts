import { ActionType } from "@/redux/actionTypes";

export interface BudgetReducerProps {
    totalAmount: number;
    income: number;
    expense: number;
}

interface AddNewIncomeActionProps {
    type: ActionType.ADD_NEW_INCOME;
    payload: number;
}

interface AddNewExpenseActionProps {
    type: ActionType.ADD_NEW_EXPENSE;
    payload: number;
}

export type BudgetActionProps = AddNewIncomeActionProps | AddNewExpenseActionProps;