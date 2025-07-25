import { createSlice } from '@reduxjs/toolkit';
interface;
1120 - FState;
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
1120 - fSlice;
createSlice({
    name: '1120-f',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120 - fSlice.actions;
export default 1120 - fSlice.reducer;
// Selectors
export const select1120;
-FValues;
(state) => state;
.1120 - f.values;
export const select1120;
-FErrors;
(state) => state;
.1120 - f.errors;
export const select1120;
-FIsComplete;
(state) => state;
.1120 - f.isComplete;
export const select1120;
-FCalculatedLines;
(state) => state;
.1120 - f.calculatedLines;
