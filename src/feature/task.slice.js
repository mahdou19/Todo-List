import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "task",
    initialState: {
        tasks: []
    },
    reducers: {
        setTasksData : (state, {payload}) => {
            state.tasks = payload
        },
        addTask: (state, {payload}) => {
            state.tasks.push(payload)
        }
    }
})

export const { setTasksData, addTask } = tasksSlice.actions
export default tasksSlice.reducer