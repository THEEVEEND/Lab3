import "./BudgetProgressbar.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface BudgetProgressbarProps {
  budget: number;
  totalExpenses: number;
  remainingBudget: number;
}

const BudgetProgressbar = ({ budget, totalExpenses, remainingBudget }: BudgetProgressbarProps) => {
  const percentage: number = (remainingBudget / budget) * 100;

  return (
    <div className="budget-Progressbar">
      <CircularProgressbar
        value={percentage}
        text={`${percentage.toFixed(0)}%`}
      />
      <p>Budget: ${budget}</p>
      <p>Expenses: ${totalExpenses}</p>
      <p>Remaining: ${remainingBudget}</p>
    </div>
  );
};

export default BudgetProgressbar;