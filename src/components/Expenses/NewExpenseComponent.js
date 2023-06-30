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
            <ExpenseItem 
                title={props.expenses[0].title} 
                amount={props.expenses[0].amount} 
                date={props.expenses[0].date}>
            </ExpenseItem>

            <ExpenseItem 
                title={props.expenses[1].title} 
                amount={props.expenses[1].amount} 
                date={props.expenses[1].date}>
            </ExpenseItem>

            <ExpenseItem 
                title={props.expenses[2].title} 
                amount={props.expenses[2].amount} 
                date={props.expenses[2].date}>
            </ExpenseItem>
        </Card>

    </div>

    );
}

export default NewExpenseComponent;