import { createSlice } from '@reduxjs/toolkit';
-4;
VState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-4;
VState = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const w;
-4;
vSlice = createSlice({
    name: 'w-4v',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = w - 4, vSlice, actions;
export default w - 4;
vSlice.reducer;
// Selectors
export const selectW;
-4;
VValues = (state) => state.w - 4;
v.values;
export const selectW;
-4;
VErrors = (state) => state.w - 4;
v.errors;
export const selectW;
-4;
VIsComplete = (state) => state.w - 4;
v.isComplete;
export const selectW;
-4;
VCalculatedLines = (state) => state.w - 4;
v.calculatedLines;
