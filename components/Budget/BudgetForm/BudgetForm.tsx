import React, { useMemo, useState } from 'react';
import css from "./BudgetForm.module.scss";
import { v4 as uuid } from "uuid";

//components
import TransactionItem from '../TransactionItem/TransactionItem';
import NoData from '@/components/NoData/NoData';

//assets
import EmptyIcon from "assets/empty-todo.svg";

//redux
import { useDispatch } from 'react-redux';
import { addNewIncomeAction, addNewExpenseAction } from '@/redux/actions/budgetActions';

//types
import { BudgetFormProps } from '@/types/components/budget';
import { InputsProps, InputsErrorProps, TransactionsInputProps } from '@/types/redux/budgetReducer';

const BudgetForm: React.FC<BudgetFormProps> = ({ type, totalAmount, income, expense }) => {

    //redux
    const dispatch = useDispatch();

    //variables
    const isIncome = useMemo(() => type === "income", [type]);
    const transactionHistory = isIncome ? income : expense;

    //local state
    const [incomeInput, setIncomeInput] = useState<TransactionsInputProps>({ subject: "", amount: 0 });
    const [expenseInput, setExpenseInput] = useState<TransactionsInputProps>({ subject: "", amount: 0 });
    const [incomeErrors, setIncomeErrors] = useState<InputsErrorProps>({ subject: "", amount: "" });
    const [expenseErrors, setExpenseErrors] = useState<InputsErrorProps>({ subject: "", amount: "" });

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        const hasErrors = handleErrors();
        if (hasErrors) return;
        const newTransaction = {
            _id: uuid(),
            type: isIncome ? "income" : "expense",
            subject: isIncome ? incomeInput.subject : expenseInput.subject,
            amount: isIncome ? incomeInput.amount : expenseInput.amount
        }
        if (isIncome) {
            dispatch(addNewIncomeAction(newTransaction));
            setIncomeInput({ subject: "", amount: 0 });
        } else {
            dispatch(addNewExpenseAction(newTransaction));
            setExpenseInput({ subject: "", amount: 0 });
        }
    }

    const handleErrors = () => {
        let tempError = {} as InputsErrorProps;
        if (isIncome) {
            if (!incomeInput.subject.trim()) tempError = { ...tempError, subject: "Subject is required" };
            if (incomeInput.amount === 0) tempError = { ...tempError, amount: "Amount must be more than 0" };
            setIncomeErrors(tempError);
        } else {
            if (!expenseInput.subject.trim()) tempError = { ...tempError, subject: "Subject is required" };
            if (expenseInput.amount === 0) tempError = { ...tempError, amount: "Amount must be more than 0" };
            if (totalAmount < expenseInput.amount) tempError = { ...tempError, amount: "You don't have enought money" }
            setExpenseErrors(tempError);
        }
        const checkErrors = Object.values(tempError);
        return !!checkErrors.length;
    }

    const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isIncome) {
            setIncomeInput({ ...incomeInput, subject: e.target.value });
            if (incomeErrors.subject && e.target.value.trim()) setIncomeErrors({ ...incomeErrors, subject: "" });
        } else {
            setExpenseInput({ ...incomeInput, subject: e.target.value });
            if (expenseErrors.subject && e.target.value.trim()) setExpenseErrors({ ...expenseErrors, subject: "" });
        }
    }

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isNumber = /^[0-9]+$/.test(e.target.value);
        if (!isNumber && e.target.value) return;
        if (isIncome) {
            setIncomeInput({ ...incomeInput, amount: !e.target.value ? 0 : parseInt(e.target.value) });
            if (incomeErrors.amount && e.target.value.trim()) setIncomeErrors({ ...incomeErrors, amount: "" });
        } else {
            setExpenseInput({ ...expenseInput, amount: !e.target.value ? 0 : parseInt(e.target.value) });
            if (expenseErrors.amount && e.target.value.trim()) setExpenseErrors({ ...expenseErrors, amount: "" });
        }
    }

    return (
        <form className={css.container} onSubmit={handleSubmit}>
            <div className={css.inputWrapper}>
                <input
                    className={isIncome ? css.incomeInput : ""}
                    name="subject"
                    type="text"
                    value={isIncome ? incomeInput.subject : expenseInput.subject}
                    placeholder={`Add ${isIncome ? "income" : "expense"}...`}
                    onChange={handleSubjectChange}
                />
                {isIncome ?
                    incomeErrors.subject && <div className={css.error}>{incomeErrors.subject}</div>
                    :
                    expenseErrors.subject && <div className={css.error}>{expenseErrors.subject}</div>
                }
            </div>
            <div className={css.inputWrapper}>
                <input
                    className={isIncome ? css.incomeInput : ""}
                    name="amount"
                    type="text"
                    value={isIncome ? incomeInput.amount : expenseInput.amount}
                    onChange={handleAmountChange}
                />
                {isIncome ?
                    incomeErrors.amount && <div className={css.error}>{incomeErrors.amount}</div>
                    :
                    expenseErrors.amount && <div className={css.error}>{expenseErrors.amount}</div>
                }
            </div>
            <div className={css.submitButtonWrapper}>
                <button className={isIncome ? css.incomeButton : ""} type="submit">
                    Add {isIncome ? "income" : "expense"}
                </button>
            </div>

            <h2 className={css.transactionHeader}>
                {isIncome ? "Income" : "Expense"} transaction history
            </h2>

            <div className={!transactionHistory.length ? css.center : ""}>
                {!transactionHistory.length ?
                    <NoData
                        type="budget"
                        text={`No ${isIncome ? "incomes" : "expenses"} yet`}
                    >
                        <EmptyIcon />
                    </NoData>
                    :
                    transactionHistory.map((item, index) => (
                        <TransactionItem
                            key={index}
                            item={item}
                            isIncome={isIncome}
                        />
                    ))}
            </div>
        </form>
    )
}

export default BudgetForm;