import { createSlice } from '@reduxjs/toolkit';
interface;
1041 - QFTState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-QFTState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1041 - qftSlice;
createSlice({
    name: '1041-qft',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1041 - qftSlice.actions;
export default 1041 - qftSlice.reducer;
// Selectors
export const select1041;
-QFTValues;
(state) => state;
.1041 - qft.values;
export const select1041;
-QFTErrors;
(state) => state;
.1041 - qft.errors;
export const select1041;
-QFTIsComplete;
(state) => state;
.1041 - qft.isComplete;
export const select1041;
-QFTCalculatedLines;
(state) => state;
.1041 - qft.calculatedLines;
