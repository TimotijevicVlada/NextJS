export interface BudgetActionProps {
    type: any
    payload: any
}

export interface BudgetReducerProps {
    totalAmount: number;
    income: number;
    expenses: number;
}