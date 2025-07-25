import { createSlice } from '@reduxjs/toolkit';
-DState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-DState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const schedule;
-dSlice;
createSlice({
    name: 'schedule-d',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - dSlice.actions;
export default schedule - dSlice.reducer;
// Selectors
export const selectSchedule;
-DValues;
(state) => state.schedule - d.values;
export const selectSchedule;
-DErrors;
(state) => state.schedule - d.errors;
export const selectSchedule;
-DIsComplete;
(state) => state.schedule - d.isComplete;
export const selectSchedule;
-DCalculatedLines;
(state) => state.schedule - d.calculatedLines;
