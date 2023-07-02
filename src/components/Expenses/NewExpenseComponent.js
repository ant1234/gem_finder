import './NewExpenseComponent.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import React, {useState} from 'react';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const NewExpenseComponent = (props) => {

    const [year, setYear] = useState('2022');
    const yearFilterHandler = yearSelected => {
        setYear(yearSelected);
    }

    const filteredExpenses = props.expenses.filter(expense => { 
        return expense.date.getFullYear().toString() === year
    });  

    return (
    <div>
        <li>
            <Card className='expenses'>
                <ExpensesFilter selected={year} onAddYearFilter={yearFilterHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList expenses={filteredExpenses} />
            </Card>
        </li>
    </div>
    );
}

export default NewExpenseComponent;