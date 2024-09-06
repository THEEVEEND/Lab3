import "./ExpenseList.css";
import categoryImages from '../categoryImages.json'; 

interface Expense {
  img?: string; 
  category: string;
  name: string;
  date: string;
  amount: number;
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: ExpenseListProps) => {
  return (
    <div className="expense-list">
      <h3>Expense List</h3>
      {expenses.map((expense, index) => (
        <div key={index} className="expense-item">
          <img
            src={categoryImages[expense.category] || ""}
            alt={expense.category}
          />
          <div className="list">
            <h3>{expense.category}</h3>
            <p>{expense.name}</p>
            <p>{expense.date}</p>
          </div>
          <h2 className="amount">${expense.amount}</h2>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;