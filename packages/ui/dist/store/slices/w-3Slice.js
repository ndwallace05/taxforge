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
const w;
-3;
Slice = createSlice({
    name: 'w-3',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = w - 3, Slice, actions;
export default w - 3;
Slice.reducer;
// Selectors
export const selectW;
-3;
Values = (state) => state.w - 3.;
values;
export const selectW;
-3E;
rrors = (state) => state.w - 3.e;
rrors;
export const selectW;
-3;
IsComplete = (state) => state.w - 3.;
isComplete;
export const selectW;
-3;
CalculatedLines = (state) => state.w - 3.;
calculatedLines;
