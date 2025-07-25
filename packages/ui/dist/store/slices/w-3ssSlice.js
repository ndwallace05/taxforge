import { createSlice } from '@reduxjs/toolkit';
-3;
SSState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-3;
SSState = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const w;
-3;
ssSlice = createSlice({
    name: 'w-3ss',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = w - 3, ssSlice, actions;
export default w - 3;
ssSlice.reducer;
// Selectors
export const selectW;
-3;
SSValues = (state) => state.w - 3;
ss.values;
export const selectW;
-3;
SSErrors = (state) => state.w - 3;
ss.errors;
export const selectW;
-3;
SSIsComplete = (state) => state.w - 3;
ss.isComplete;
export const selectW;
-3;
SSCalculatedLines = (state) => state.w - 3;
ss.calculatedLines;
