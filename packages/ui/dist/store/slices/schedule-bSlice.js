import { createSlice } from '@reduxjs/toolkit';
-BState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-BState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const schedule;
-bSlice;
createSlice({
    name: 'schedule-b',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - bSlice.actions;
export default schedule - bSlice.reducer;
// Selectors
export const selectSchedule;
-BValues;
(state) => state.schedule - b.values;
export const selectSchedule;
-BErrors;
(state) => state.schedule - b.errors;
export const selectSchedule;
-BIsComplete;
(state) => state.schedule - b.isComplete;
export const selectSchedule;
-BCalculatedLines;
(state) => state.schedule - b.calculatedLines;
