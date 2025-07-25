import { createSlice } from '@reduxjs/toolkit';
-4;
State;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-4;
State = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const ss;
-4;
Slice = createSlice({
    name: 'ss-4',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = ss - 4, Slice, actions;
export default ss - 4;
Slice.reducer;
// Selectors
export const selectSS;
-4;
Values = (state) => state.ss - 4.;
values;
export const selectSS;
-4E;
rrors = (state) => state.ss - 4.e;
rrors;
export const selectSS;
-4;
IsComplete = (state) => state.ss - 4.;
isComplete;
export const selectSS;
-4;
CalculatedLines = (state) => state.ss - 4.;
calculatedLines;
