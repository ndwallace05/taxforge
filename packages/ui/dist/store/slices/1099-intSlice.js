import { createSlice } from '@reduxjs/toolkit';
interface;
1099 - INTState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-INTState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1099 - intSlice;
createSlice({
    name: '1099-int',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099 - intSlice.actions;
export default 1099 - intSlice.reducer;
// Selectors
export const select1099;
-INTValues;
(state) => state;
.1099 - int.values;
export const select1099;
-INTErrors;
(state) => state;
.1099 - int.errors;
export const select1099;
-INTIsComplete;
(state) => state;
.1099 - int.isComplete;
export const select1099;
-INTCalculatedLines;
(state) => state;
.1099 - int.calculatedLines;
