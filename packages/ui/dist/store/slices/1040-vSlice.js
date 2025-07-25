import { createSlice } from '@reduxjs/toolkit';
interface;
1040 - VState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-VState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1040 - vSlice;
createSlice({
    name: '1040-v',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1040 - vSlice.actions;
export default 1040 - vSlice.reducer;
// Selectors
export const select1040;
-VValues;
(state) => state;
.1040 - v.values;
export const select1040;
-VErrors;
(state) => state;
.1040 - v.errors;
export const select1040;
-VIsComplete;
(state) => state;
.1040 - v.isComplete;
export const select1040;
-VCalculatedLines;
(state) => state;
.1040 - v.calculatedLines;
