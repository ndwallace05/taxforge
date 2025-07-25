import { createSlice } from '@reduxjs/toolkit';
-HState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-HState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const schedule;
-hSlice;
createSlice({
    name: 'schedule-h',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - hSlice.actions;
export default schedule - hSlice.reducer;
// Selectors
export const selectSchedule;
-HValues;
(state) => state.schedule - h.values;
export const selectSchedule;
-HErrors;
(state) => state.schedule - h.errors;
export const selectSchedule;
-HIsComplete;
(state) => state.schedule - h.isComplete;
export const selectSchedule;
-HCalculatedLines;
(state) => state.schedule - h.calculatedLines;
