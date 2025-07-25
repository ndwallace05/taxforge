import { createSlice } from '@reduxjs/toolkit';
interface;
1099 - NECState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-NECState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1099 - necSlice;
createSlice({
    name: '1099-nec',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099 - necSlice.actions;
export default 1099 - necSlice.reducer;
// Selectors
export const select1099;
-NECValues;
(state) => state;
.1099 - nec.values;
export const select1099;
-NECErrors;
(state) => state;
.1099 - nec.errors;
export const select1099;
-NECIsComplete;
(state) => state;
.1099 - nec.isComplete;
export const select1099;
-NECCalculatedLines;
(state) => state;
.1099 - nec.calculatedLines;
