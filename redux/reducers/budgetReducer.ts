
interface BudgetActionProps {
    type: any
    payload: any
}

interface InitialStateProps {
    amount: number;
}

const initialState = {
    amount: 0
}

export const budgetReducer = (state: InitialStateProps = initialState, action: BudgetActionProps) => {
    switch (action.type) {
        case "SOME_CASE":
            return {
                ...state,
                amount: action.payload
            }
        default:
            return state;
    }
}