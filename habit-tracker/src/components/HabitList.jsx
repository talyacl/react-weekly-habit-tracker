import React from 'react';
import HabitItem from './HabitItem';

function HabitList({ habits, onToggleComplete, onDelete }) {
return (
    <ul>
        {habits.map((habit) => (
        <HabitItem
            key={habit.id}
            habit={habit}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
        />
        ))}
    </ul>
);
}

export default HabitList;