import { createSlice } from '@reduxjs/toolkit';
interface;
1120 - RICState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-RICState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1120 - ricSlice;
createSlice({
    name: '1120-ric',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120 - ricSlice.actions;
export default 1120 - ricSlice.reducer;
// Selectors
export const select1120;
-RICValues;
(state) => state;
.1120 - ric.values;
export const select1120;
-RICErrors;
(state) => state;
.1120 - ric.errors;
export const select1120;
-RICIsComplete;
(state) => state;
.1120 - ric.isComplete;
export const select1120;
-RICCalculatedLines;
(state) => state;
.1120 - ric.calculatedLines;
