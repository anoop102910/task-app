import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'task',
    initialState: JSON.parse(localStorage.getItem('tasks')) || [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('tasks', JSON.stringify(state));
        },
        deleteTask: (state, action) => {
            const newState = state.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(newState));
            return newState;
        },
        markAsComplete: (state, action) => {
            const newState = state.map(task => task.id === action.payload ? {...task, complete: !task.complete} : task);
            localStorage.setItem('tasks', JSON.stringify(newState));
            return newState;
        },

    }
});

export const { addTask, getTasks,deleteTask,markAsComplete } = taskSlice.actions;
export default taskSlice.reducer;

