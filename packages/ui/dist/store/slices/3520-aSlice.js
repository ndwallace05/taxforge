import { createSlice } from '@reduxjs/toolkit';
interface;
3520 - AState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-AState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
3520 - aSlice;
createSlice({
    name: '3520-a',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 3520 - aSlice.actions;
export default 3520 - aSlice.reducer;
// Selectors
export const select3520;
-AValues;
(state) => state;
.3520 - a.values;
export const select3520;
-AErrors;
(state) => state;
.3520 - a.errors;
export const select3520;
-AIsComplete;
(state) => state;
.3520 - a.isComplete;
export const select3520;
-ACalculatedLines;
(state) => state;
.3520 - a.calculatedLines;
