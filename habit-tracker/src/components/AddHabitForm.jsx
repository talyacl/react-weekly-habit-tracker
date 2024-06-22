import React from 'react';
function AddHabitForm({ onAddHabit }) {
    const [habitName, setHabitName] = React.useState('');

    const handleChange = (e) => {
        setHabitName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!habitName.trim()) return;
        onAddHabit(habitName);
        setHabitName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter habit name"
            value={habitName}
            onChange={handleChange}
            />
        <button type="submit">Add Habit</button>
        </form>
    );
}

export default AddHabitForm;