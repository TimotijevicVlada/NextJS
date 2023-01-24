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
        case ActionType.DELETE_TRANSACTION:
            const isIncome = action.payload.type === "income";
            const transaction = isIncome ? state.income : state.expense;
            const tempTransaction = transaction.filter(item => item._id !== action.payload._id);
            const updateTotalAmount = isIncome ? state.totalAmount - action.payload.amount : state.totalAmount + action.payload.amount;
            return {
                ...state,
                totalAmount: updateTotalAmount,
                income: isIncome ? tempTransaction : state.income,
                expense: !isIncome ? tempTransaction : state.expense
            }
        default:
            return state;
    }
}