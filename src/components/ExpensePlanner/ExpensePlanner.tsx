import './ExpensePlanner.css';
import { useState } from 'react';
import BudgetInput from '../BudgetInput/BudgetInput';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import BudgetInfo from '../BudgetProgressbar/BudgetProgressbar';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

interface Expense {
  name: string;
  amount: number;
  category: string;
  date: string;
}

const ExpensePlanner = () => {
  const [budget, setBudget] = useState<number>(0);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBudget = budget - totalExpenses;

  const addExpense = (name: string, amount: number, category: string, date: string) => {
    setExpenses([...expenses, { name, amount, category, date }]);
    setShowForm(false);
  };

  const resetBudget = () => {
    setBudget(0);
    setExpenses([]);
  };

  const filteredExpenses = filterCategory === 'All'
    ? expenses
    : expenses.filter(expense => expense.category === filterCategory);

  return (
    <div className="expense-planner">
      {budget === 0 ? (
        <BudgetInput onSubmit={setBudget} />
      ) : (
        <div>
          <div className='expense-title'>
            <h1>Expense Planner</h1>
            <button onClick={() => setShowForm(true)}>+ Add Expense</button>
          </div>
          <div className='expense-info'>
            <div className='expense-right'>
              <BudgetInfo 
                budget={budget}
                totalExpenses={totalExpenses}
                remainingBudget={remainingBudget}
              />
              <button onClick={resetBudget}>Reset Expense Budget</button>
            </div>
            <div className='expense-left'>
              <ExpenseFilter 
                filterCategory={filterCategory}
                onFilterChange={setFilterCategory}
              />
              <ExpenseList expenses={filteredExpenses} />
              {showForm && <ExpenseForm onAddExpense={addExpense} onClose={() => setShowForm(false)} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpensePlanner;

