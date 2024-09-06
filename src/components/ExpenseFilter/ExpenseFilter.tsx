import "./ExpenseFilter.css";

interface ExpenseFilterProps {
  filterCategory: string;
  onFilterChange: (category: string) => void;
}

const ExpenseFilter = ({ filterCategory, onFilterChange }: ExpenseFilterProps) => {
  return (
    <div className="filter-category">
      <label className="filter-title">Filter by Category: </label>
      <select value={filterCategory} onChange={(e) => onFilterChange(e.target.value)}> 
        <option value="All">All</option>
        <option value="food">Food</option>
        <option value="savings">Savings</option>
        <option value="house">House</option>
        <option value="health">Health</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;