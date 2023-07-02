import React, {useState} from "react";
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

    const expenseData = {};

    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');
    const [hideForm, setHideForm] = useState(false);

    const titleChangeHandler = event => {
        setEnterTitle(event.target.value);
    };

    const amountChangeHandler = event => {
        setEnterAmount(event.target.value);
    };

    const dateChangeHandler = event => {
        setEnterDate(event.target.value);
    };

    const onOpenExpenseForm = event => {
        setHideForm(true);
    };

    const onCancelHandler = event => {
        setHideForm(false);
    };

    const expenseSubHandler = event => {

        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: +enterAmount,
            date: new Date(enterDate),
        };

        props.onSaveExpenseData(expenseData);

        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    };

    if(hideForm) {
        return (<form onSubmit={expenseSubHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enterAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enterDate} min="2022-01-01" max="2025-01-01" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={onCancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>);
    }

    return (
    <div className="new-expense__controls">
        <div className="new-expense__actions">
            <button type="submit" onClick={onOpenExpenseForm}>Add new expense</button>
        </div>
    </div>
    );
};

export default NewExpenseForm;