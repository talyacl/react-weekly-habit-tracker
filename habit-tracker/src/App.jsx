import React from 'react';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';
import habitsData from '/src/data/habitsData';

function App() {
  const [habits, setHabits] = React.useState(habitsData);

  const addHabit = (habitName) => {
    const newHabit = {
      id: Date.now(),
      name: habitName,
      completions: Array(7).fill(false),
    };
    setHabits([...habits, newHabit]);
  };

  const toggleComplete = (habitId, dayIndex) => {
    setHabits(habits.map((habit) => {
      if (habit.id === habitId) {
        const updatedCompletions = [...habit.completions];
        updatedCompletions[dayIndex] = !updatedCompletions[dayIndex];
        return { ...habit, completions: updatedCompletions };
      }
      return habit;
    }));
  };

  return (
    <div>
      <h1 className="flex justify-center text-6xl mt-6 mb-4">Weekly Habit Tracker</h1>
      <AddHabitForm onAddHabit={addHabit} />
      <HabitList habits={habits} onToggleComplete={toggleComplete} />
    </div>
  );
}

export default App;