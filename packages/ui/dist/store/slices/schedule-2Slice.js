import { createSlice } from '@reduxjs/toolkit';
-2;
State;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-2;
State = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const schedule;
-2;
Slice = createSlice({
    name: 'schedule-2',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - 2, Slice, actions;
export default schedule - 2;
Slice.reducer;
// Selectors
export const selectSchedule;
-2;
Values = (state) => state.schedule - 2.;
values;
export const selectSchedule;
-2E;
rrors = (state) => state.schedule - 2.e;
rrors;
export const selectSchedule;
-2;
IsComplete = (state) => state.schedule - 2.;
isComplete;
export const selectSchedule;
-2;
CalculatedLines = (state) => state.schedule - 2.;
calculatedLines;
