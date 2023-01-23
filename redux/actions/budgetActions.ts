import { ActionType } from "../actionTypes"


export const addNewIncomeAction = (income: number) => ({
    type: ActionType.ADD_NEW_INCOME,
    payload: income
})

export const addNewExpenseAction = (expense: number) => ({
    type: ActionType.ADD_NEW_EXPENSE,
    payload: expense
})