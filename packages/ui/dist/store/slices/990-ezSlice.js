import { createSlice } from '@reduxjs/toolkit';
interface;
990 - EZState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-EZState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
990 - ezSlice;
createSlice({
    name: '990-ez',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 990 - ezSlice.actions;
export default 990 - ezSlice.reducer;
// Selectors
export const select990;
-EZValues;
(state) => state;
.990 - ez.values;
export const select990;
-EZErrors;
(state) => state;
.990 - ez.errors;
export const select990;
-EZIsComplete;
(state) => state;
.990 - ez.isComplete;
export const select990;
-EZCalculatedLines;
(state) => state;
.990 - ez.calculatedLines;
