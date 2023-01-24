import { ActionType } from "../actionTypes"
import { InputsProps } from "@/types/redux/budgetReducer"


export const addNewIncomeAction = (income: InputsProps) => ({
    type: ActionType.ADD_NEW_INCOME,
    payload: income
})

export const addNewExpenseAction = (expense: InputsProps) => ({
    type: ActionType.ADD_NEW_EXPENSE,
    payload: expense
})