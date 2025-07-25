import { createSlice } from '@reduxjs/toolkit';
interface;
1098 - QState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-QState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1098 - qSlice;
createSlice({
    name: '1098-q',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1098 - qSlice.actions;
export default 1098 - qSlice.reducer;
// Selectors
export const select1098;
-QValues;
(state) => state;
.1098 - q.values;
export const select1098;
-QErrors;
(state) => state;
.1098 - q.errors;
export const select1098;
-QIsComplete;
(state) => state;
.1098 - q.isComplete;
export const select1098;
-QCalculatedLines;
(state) => state;
.1098 - q.calculatedLines;
