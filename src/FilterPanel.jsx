import React from "react";

function FilterPanel({ onFilterChange, filters = [] }) {
  const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  return (
    <div className="filter-panel">
      <h3>Filter Bots by Class</h3>
      <div className="filter-options">
        {classes.map((botClass) => (
          <label key={botClass}>
            <input
              type="checkbox"
              value={botClass}
              checked={filters.includes(botClass)} // Check if class is selected
              onChange={() => onFilterChange(botClass)} // Trigger filter change
            />
            {botClass}
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterPanel;
