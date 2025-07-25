import { createSlice } from '@reduxjs/toolkit';
-4;
SState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-4;
SState = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const w;
-4;
sSlice = createSlice({
    name: 'w-4s',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = w - 4, sSlice, actions;
export default w - 4;
sSlice.reducer;
// Selectors
export const selectW;
-4;
SValues = (state) => state.w - 4;
s.values;
export const selectW;
-4;
SErrors = (state) => state.w - 4;
s.errors;
export const selectW;
-4;
SIsComplete = (state) => state.w - 4;
s.isComplete;
export const selectW;
-4;
SCalculatedLines = (state) => state.w - 4;
s.calculatedLines;
