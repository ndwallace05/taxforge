import { createSlice } from '@reduxjs/toolkit';
interface;
1120 - REITState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-REITState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1120 - reitSlice;
createSlice({
    name: '1120-reit',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120 - reitSlice.actions;
export default 1120 - reitSlice.reducer;
// Selectors
export const select1120;
-REITValues;
(state) => state;
.1120 - reit.values;
export const select1120;
-REITErrors;
(state) => state;
.1120 - reit.errors;
export const select1120;
-REITIsComplete;
(state) => state;
.1120 - reit.isComplete;
export const select1120;
-REITCalculatedLines;
(state) => state;
.1120 - reit.calculatedLines;
