import { createSlice } from '@reduxjs/toolkit';
-9;
State;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-9;
State = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const w;
-9;
Slice = createSlice({
    name: 'w-9',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = w - 9, Slice, actions;
export default w - 9;
Slice.reducer;
// Selectors
export const selectW;
-9;
Values = (state) => state.w - 9.;
values;
export const selectW;
-9E;
rrors = (state) => state.w - 9.e;
rrors;
export const selectW;
-9;
IsComplete = (state) => state.w - 9.;
isComplete;
export const selectW;
-9;
CalculatedLines = (state) => state.w - 9.;
calculatedLines;
