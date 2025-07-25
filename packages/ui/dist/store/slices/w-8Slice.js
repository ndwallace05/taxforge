import { createSlice } from '@reduxjs/toolkit';
-8;
State;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-8;
State = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const w;
-8;
Slice = createSlice({
    name: 'w-8',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = w - 8, Slice, actions;
export default w - 8;
Slice.reducer;
// Selectors
export const selectW;
-8;
Values = (state) => state.w - 8.;
values;
export const selectW;
-8E;
rrors = (state) => state.w - 8.e;
rrors;
export const selectW;
-8;
IsComplete = (state) => state.w - 8.;
isComplete;
export const selectW;
-8;
CalculatedLines = (state) => state.w - 8.;
calculatedLines;
