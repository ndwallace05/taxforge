import { createSlice } from '@reduxjs/toolkit';
-EState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-EState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const schedule;
-eSlice;
createSlice({
    name: 'schedule-e',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - eSlice.actions;
export default schedule - eSlice.reducer;
// Selectors
export const selectSchedule;
-EValues;
(state) => state.schedule - e.values;
export const selectSchedule;
-EErrors;
(state) => state.schedule - e.errors;
export const selectSchedule;
-EIsComplete;
(state) => state.schedule - e.isComplete;
export const selectSchedule;
-ECalculatedLines;
(state) => state.schedule - e.calculatedLines;
