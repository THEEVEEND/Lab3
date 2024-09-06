import "./BudgetInput.css";
import { useState } from "react";

interface BudgetInputProps {
  onSubmit: (budget: number) => void;
}

const BudgetInput = ({ onSubmit }: BudgetInputProps) => {
  const [budget, setBudget] = useState<number | "">();

  const handleSubmit = () => {
    if (typeof budget === "number" && budget > 0) {
      onSubmit(budget);
    }
  };

  return (
    <div className="budget-input">
      <h2>Define Budget</h2>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(parseFloat(e.target.value) || "")}
        placeholder="Enter your budget"
        className="budget-input-field"
      />
      <button
        onClick={handleSubmit}
        disabled={typeof budget !== "number" || budget <= 0}
        className="budget-submit-button"
      >
        Define Budget
      </button>
    </div>
  );
};

export default BudgetInput;