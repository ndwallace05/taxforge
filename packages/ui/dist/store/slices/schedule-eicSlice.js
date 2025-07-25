import { createSlice } from '@reduxjs/toolkit';
-EICState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-EICState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const schedule;
-eicSlice;
createSlice({
    name: 'schedule-eic',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - eicSlice.actions;
export default schedule - eicSlice.reducer;
// Selectors
export const selectSchedule;
-EICValues;
(state) => state.schedule - eic.values;
export const selectSchedule;
-EICErrors;
(state) => state.schedule - eic.errors;
export const selectSchedule;
-EICIsComplete;
(state) => state.schedule - eic.isComplete;
export const selectSchedule;
-EICCalculatedLines;
(state) => state.schedule - eic.calculatedLines;
