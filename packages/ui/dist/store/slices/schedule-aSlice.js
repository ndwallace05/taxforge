import { createSlice } from '@reduxjs/toolkit';
-AState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-AState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const schedule;
-aSlice;
createSlice({
    name: 'schedule-a',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - aSlice.actions;
export default schedule - aSlice.reducer;
// Selectors
export const selectSchedule;
-AValues;
(state) => state.schedule - a.values;
export const selectSchedule;
-AErrors;
(state) => state.schedule - a.errors;
export const selectSchedule;
-AIsComplete;
(state) => state.schedule - a.isComplete;
export const selectSchedule;
-ACalculatedLines;
(state) => state.schedule - a.calculatedLines;
