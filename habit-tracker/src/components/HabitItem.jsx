import React from 'react';

function HabitItem({ habit, onToggleComplete }) {
    const handleToggleComplete = (index) => {
    onToggleComplete(habit.id, index);
};

return (
    <li>
        {habit.name}:
        {habit.completions.map((completed, index) => (
            <label key={index}>
            <input
            type="checkbox"
            checked={completed}
            onChange={() => handleToggleComplete(index)}
            />
            Day {index + 1}
            </label>
        ))}
    </li>
);
}

export default HabitItem;