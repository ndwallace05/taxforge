import { createSlice } from '@reduxjs/toolkit';
-SEState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-SEState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const schedule;
-seSlice;
createSlice({
    name: 'schedule-se',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - seSlice.actions;
export default schedule - seSlice.reducer;
// Selectors
export const selectSchedule;
-SEValues;
(state) => state.schedule - se.values;
export const selectSchedule;
-SEErrors;
(state) => state.schedule - se.errors;
export const selectSchedule;
-SEIsComplete;
(state) => state.schedule - se.isComplete;
export const selectSchedule;
-SECalculatedLines;
(state) => state.schedule - se.calculatedLines;
