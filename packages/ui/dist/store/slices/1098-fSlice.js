import { createSlice } from '@reduxjs/toolkit';
interface;
1098 - FState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-FState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1098 - fSlice;
createSlice({
    name: '1098-f',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1098 - fSlice.actions;
export default 1098 - fSlice.reducer;
// Selectors
export const select1098;
-FValues;
(state) => state;
.1098 - f.values;
export const select1098;
-FErrors;
(state) => state;
.1098 - f.errors;
export const select1098;
-FIsComplete;
(state) => state;
.1098 - f.isComplete;
export const select1098;
-FCalculatedLines;
(state) => state;
.1098 - f.calculatedLines;
