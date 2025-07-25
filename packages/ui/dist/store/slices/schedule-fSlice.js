import { createSlice } from '@reduxjs/toolkit';
-FState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-FState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const schedule;
-fSlice;
createSlice({
    name: 'schedule-f',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - fSlice.actions;
export default schedule - fSlice.reducer;
// Selectors
export const selectSchedule;
-FValues;
(state) => state.schedule - f.values;
export const selectSchedule;
-FErrors;
(state) => state.schedule - f.errors;
export const selectSchedule;
-FIsComplete;
(state) => state.schedule - f.isComplete;
export const selectSchedule;
-FCalculatedLines;
(state) => state.schedule - f.calculatedLines;
