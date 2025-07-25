import { createSlice } from '@reduxjs/toolkit';
-JState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-JState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const schedule;
-jSlice;
createSlice({
    name: 'schedule-j',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.values[action.payload.field] = action.payload.value;
            // Clear error when value is set
            delete state.errors[action.payload.field];
        },
        setError: (state, action) => {
            state.errors[action.payload.field] = action.payload.error;
        },
        setCalculatedValue: (state, action) => {
            state.calculatedLines[action.payload.field] = action.payload.value;
        },
        setComplete: (state, action) => {
            state.isComplete = action.payload;
        },
        reset: () => initialState
    }
});
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - jSlice.actions;
export default schedule - jSlice.reducer;
// Selectors
export const selectSchedule;
-JValues;
(state) => state.schedule - j.values;
export const selectSchedule;
-JErrors;
(state) => state.schedule - j.errors;
export const selectSchedule;
-JIsComplete;
(state) => state.schedule - j.isComplete;
export const selectSchedule;
-JCalculatedLines;
(state) => state.schedule - j.calculatedLines;
