import { BudgetActionProps } from "types/redux/budgetReducer";
import { BudgetReducerProps } from "types/redux/budgetReducer";
import { SOME_CASE } from "../actionTypes";

const initialState = {
    totalAmount: 0,
    income: 0,
    expenses: 0
}

export const budgetReducer = (state: BudgetReducerProps = initialState, action: BudgetActionProps) => {
    switch (action.type) {
        case SOME_CASE:
            return {
                ...state,
                totalAmount: action.payload
            }
        default:
            return state;
    }
}