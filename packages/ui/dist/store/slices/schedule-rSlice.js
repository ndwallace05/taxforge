import { createSlice } from '@reduxjs/toolkit';
-RState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-RState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const schedule;
-rSlice;
createSlice({
    name: 'schedule-r',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - rSlice.actions;
export default schedule - rSlice.reducer;
// Selectors
export const selectSchedule;
-RValues;
(state) => state.schedule - r.values;
export const selectSchedule;
-RErrors;
(state) => state.schedule - r.errors;
export const selectSchedule;
-RIsComplete;
(state) => state.schedule - r.isComplete;
export const selectSchedule;
-RCalculatedLines;
(state) => state.schedule - r.calculatedLines;
