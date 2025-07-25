import { createSlice } from '@reduxjs/toolkit';
-C - EZState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-C - EZState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const schedule;
-c - ezSlice;
createSlice({
    name: 'schedule-c-ez',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - c - ezSlice.actions;
export default schedule - c - ezSlice.reducer;
// Selectors
export const selectSchedule;
-C - EZValues;
(state) => state.schedule - c - ez.values;
export const selectSchedule;
-C - EZErrors;
(state) => state.schedule - c - ez.errors;
export const selectSchedule;
-C - EZIsComplete;
(state) => state.schedule - c - ez.isComplete;
export const selectSchedule;
-C - EZCalculatedLines;
(state) => state.schedule - c - ez.calculatedLines;
