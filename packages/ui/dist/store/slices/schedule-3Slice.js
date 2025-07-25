import { createSlice } from '@reduxjs/toolkit';
-3;
State;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-3;
State = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const schedule;
-3;
Slice = createSlice({
    name: 'schedule-3',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - 3, Slice, actions;
export default schedule - 3;
Slice.reducer;
// Selectors
export const selectSchedule;
-3;
Values = (state) => state.schedule - 3.;
values;
export const selectSchedule;
-3E;
rrors = (state) => state.schedule - 3.e;
rrors;
export const selectSchedule;
-3;
IsComplete = (state) => state.schedule - 3.;
isComplete;
export const selectSchedule;
-3;
CalculatedLines = (state) => state.schedule - 3.;
calculatedLines;
