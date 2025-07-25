import { createSlice } from '@reduxjs/toolkit';
-CState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-CState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const schedule;
-cSlice;
createSlice({
    name: 'schedule-c',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - cSlice.actions;
export default schedule - cSlice.reducer;
// Selectors
export const selectSchedule;
-CValues;
(state) => state.schedule - c.values;
export const selectSchedule;
-CErrors;
(state) => state.schedule - c.errors;
export const selectSchedule;
-CIsComplete;
(state) => state.schedule - c.isComplete;
export const selectSchedule;
-CCalculatedLines;
(state) => state.schedule - c.calculatedLines;
