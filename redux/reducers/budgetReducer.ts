import { BudgetActionProps } from "types/redux/budgetReducer";
import { BudgetReducerProps } from "types/redux/budgetReducer";
import { ActionType } from "../actionTypes";

const initialState = {
    totalAmount: 0,
    income: [],
    expense: []
}

export const budgetReducer = (state: BudgetReducerProps = initialState, action: BudgetActionProps) => {
    switch (action.type) {
        case ActionType.ADD_NEW_INCOME:
            return {
                ...state,
                totalAmount: state.totalAmount + action.payload.amount,
                income: [...state.income, action.payload]
            }
        case ActionType.ADD_NEW_EXPENSE:
            return {
                ...state,
                totalAmount: state.totalAmount - action.payload.amount,
                expense: [...state.expense, action.payload]
            }
        default:
            return state;
    }
}