import './NewExpenseComponent.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import React, {useState} from 'react';

const NewExpenseComponent = (props) => {

    const [year, setYear] = useState('2020');
    const yearFilterHandler = yearSelected => {
        setYear(yearSelected);
        console.log(year);
    }

    return (
    <div>
        <Card className='expenses'>
            <ExpensesFilter selected={year} onAddYearFilter={yearFilterHandler}/>

            {props.expenses.map(expense => 
                <ExpenseItem 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}>
                </ExpenseItem>
            )};

        </Card>

    </div>

    );
}

export default NewExpenseComponent;