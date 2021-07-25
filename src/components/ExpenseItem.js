import './ExpenseItem.css';
import ExpnesData from './ExpnesData';
import  Card  from './UI/Card';

const ExpenseItem = ({title, amount, date}) => {
   

    return (
        <Card className='expense-item'>
            <ExpnesData date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${amount}
                </div>
            </div>
        </Card>
    )
}

export default ExpenseItem
