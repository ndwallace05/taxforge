import { createSlice } from '@reduxjs/toolkit';
-1;
State;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-1;
State = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const schedule;
-1;
Slice = createSlice({
    name: 'schedule-1',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - 1, Slice, actions;
export default schedule - 1;
Slice.reducer;
// Selectors
export const selectSchedule;
-1;
Values = (state) => state.schedule - 1.;
values;
export const selectSchedule;
-1E;
rrors = (state) => state.schedule - 1.e;
rrors;
export const selectSchedule;
-1;
IsComplete = (state) => state.schedule - 1.;
isComplete;
export const selectSchedule;
-1;
CalculatedLines = (state) => state.schedule - 1.;
calculatedLines;
