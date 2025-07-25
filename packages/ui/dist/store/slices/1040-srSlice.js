import { createSlice } from '@reduxjs/toolkit';
interface;
1040 - SRState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-SRState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1040 - srSlice;
createSlice({
    name: '1040-sr',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1040 - srSlice.actions;
export default 1040 - srSlice.reducer;
// Selectors
export const select1040;
-SRValues;
(state) => state;
.1040 - sr.values;
export const select1040;
-SRErrors;
(state) => state;
.1040 - sr.errors;
export const select1040;
-SRIsComplete;
(state) => state;
.1040 - sr.isComplete;
export const select1040;
-SRCalculatedLines;
(state) => state;
.1040 - sr.calculatedLines;
