import './ExpenseForm.css';
import { useState } from 'react';

interface ExpenseFormProps {
  onAddExpense: (name: string, amount: number, category: string, date: string) => void;
  onClose: () => void;
}

const ExpenseForm = ({ onAddExpense, onClose }: ExpenseFormProps) => {
  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('Select');
  const [date, setDate] = useState<string>('');


  //
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && amount && category !== 'Select' && date) {
      onAddExpense(name, parseFloat(amount), category, date);
      setName('');
      setAmount('');
      setCategory('Select');
      setDate('');
      onClose(); 
    }
  };

  //

  return (
    <div className="expense-form-popup">
      <button className='close-button' type="button" onClick={onClose}>x</button> {/* Botón para cerrar */}
      <form onSubmit={handleSubmit}>
        <label>Expense Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
        />

        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Select">Select</option>
          <option value="food">Food</option>
          <option value="savings">Savings</option>
          <option value="house">House</option>
          <option value="health">Health</option>
        </select>

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button className='add-button' type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;

