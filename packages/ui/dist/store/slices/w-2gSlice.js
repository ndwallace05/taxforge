import { createSlice } from '@reduxjs/toolkit';
-2;
GState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-2;
GState = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const w;
-2;
gSlice = createSlice({
    name: 'w-2g',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = w - 2, gSlice, actions;
export default w - 2;
gSlice.reducer;
// Selectors
export const selectW;
-2;
GValues = (state) => state.w - 2;
g.values;
export const selectW;
-2;
GErrors = (state) => state.w - 2;
g.errors;
export const selectW;
-2;
GIsComplete = (state) => state.w - 2;
g.isComplete;
export const selectW;
-2;
GCalculatedLines = (state) => state.w - 2;
g.calculatedLines;
