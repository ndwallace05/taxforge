import { createSlice } from '@reduxjs/toolkit';
-8812;
State;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-8812;
State = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const schedule;
-8812;
Slice = createSlice({
    name: 'schedule-8812',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule - 8812, Slice, actions;
export default schedule - 8812;
Slice.reducer;
// Selectors
export const selectSchedule;
-8812;
Values = (state) => state.schedule - 8812.;
values;
export const selectSchedule;
-8812E;
rrors = (state) => state.schedule - 8812.e;
rrors;
export const selectSchedule;
-8812;
IsComplete = (state) => state.schedule - 8812.;
isComplete;
export const selectSchedule;
-8812;
CalculatedLines = (state) => state.schedule - 8812.;
calculatedLines;
