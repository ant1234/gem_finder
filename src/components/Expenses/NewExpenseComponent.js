import './NewExpenseComponent.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import React, {useState} from 'react';
import ExpenseList from './ExpensesList';

const NewExpenseComponent = (props) => {

    const [year, setYear] = useState('2020');
    const yearFilterHandler = yearSelected => {
        setYear(yearSelected);
        console.log(year);
    }

    const filteredExpenses = props.expenses.filter(expense => { 
        return expense.date.getFullYear().toString() === year
    });  

    return (
    <div>
        <li>
            <Card className='expenses'>
                <ExpensesFilter selected={year} onAddYearFilter={yearFilterHandler}/>
                <ExpenseList expenses={filteredExpenses} />
            </Card>
        </li>
    </div>
    );
}

export default NewExpenseComponent;