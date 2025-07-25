import { createSlice } from '@reduxjs/toolkit';
-4;
PState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-4;
PState = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const w;
-4;
pSlice = createSlice({
    name: 'w-4p',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = w - 4, pSlice, actions;
export default w - 4;
pSlice.reducer;
// Selectors
export const selectW;
-4;
PValues = (state) => state.w - 4;
p.values;
export const selectW;
-4;
PErrors = (state) => state.w - 4;
p.errors;
export const selectW;
-4;
PIsComplete = (state) => state.w - 4;
p.isComplete;
export const selectW;
-4;
PCalculatedLines = (state) => state.w - 4;
p.calculatedLines;
