import { createSlice } from '@reduxjs/toolkit';
interface;
1099 - LTCState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-LTCState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1099 - ltcSlice;
createSlice({
    name: '1099-ltc',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099 - ltcSlice.actions;
export default 1099 - ltcSlice.reducer;
// Selectors
export const select1099;
-LTCValues;
(state) => state;
.1099 - ltc.values;
export const select1099;
-LTCErrors;
(state) => state;
.1099 - ltc.errors;
export const select1099;
-LTCIsComplete;
(state) => state;
.1099 - ltc.isComplete;
export const select1099;
-LTCCalculatedLines;
(state) => state;
.1099 - ltc.calculatedLines;
