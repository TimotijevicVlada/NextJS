import React, { useMemo, useState } from 'react';
import css from "./BudgetForm.module.scss";

//redux
import { useDispatch } from 'react-redux';
import { addNewIncomeAction, addNewExpenseAction } from '@/redux/actions/budgetActions';

//types
import { BudgetFormProps } from '@/types/components/budget';
import { InputsProps } from '@/types/redux/budgetReducer';

const BudgetForm: React.FC<BudgetFormProps> = ({ type }) => {

    //redux
    const dispatch = useDispatch();

    //variables
    const isIncome = useMemo(() => type === "income", [type]);

    //local state
    const [incomeInput, setIncomeInput] = useState<InputsProps>({ subject: "", amount: 0 });
    const [expenseInput, setExpenseInput] = useState<InputsProps>({ subject: "", amount: 0 });
    const [incomeErrors, setIncomeErrors] = useState({ subject: "", amount: "" });
    const [expenseErrors, setExpenseErrors] = useState({ subject: "", amount: "" });

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isIncome) {
            dispatch(addNewIncomeAction(incomeInput));
            setIncomeInput({ subject: "", amount: 0 });
        } else {
            dispatch(addNewExpenseAction(expenseInput));
            setExpenseInput({ subject: "", amount: 0 });
        }
    }

    const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isIncome) {
            setIncomeInput({ ...incomeInput, subject: e.target.value });
        } else {
            setExpenseInput({ ...incomeInput, subject: e.target.value });
        }
    }

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isNumber = /^[0-9]+$/.test(e.target.value);
        if (!isNumber && e.target.value) return;
        if (isIncome) {
            setIncomeInput({ ...incomeInput, amount: !e.target.value ? 0 : parseInt(e.target.value) });
        } else {
            setExpenseInput({ ...expenseInput, amount: !e.target.value ? 0 : parseInt(e.target.value) });
        }
    }

    return (
        <form className={css.container} onSubmit={handleSubmit}>
            <input
                className={isIncome ? css.incomeInput : ""}
                name="subject"
                type="text"
                value={isIncome ? incomeInput.subject : expenseInput.subject}
                placeholder={`Add ${isIncome ? "income" : "expense"}...`}
                onChange={handleSubjectChange}
            />
            <input
                className={isIncome ? css.incomeInput : ""}
                name="amount"
                type="text"
                value={isIncome ? incomeInput.amount : expenseInput.amount}
                onChange={handleAmountChange}
            />
            <button className={isIncome ? css.incomeButton : ""} type="submit">
                Add {isIncome ? "income" : "expense"}
            </button>
        </form>
    )
}

export default BudgetForm;