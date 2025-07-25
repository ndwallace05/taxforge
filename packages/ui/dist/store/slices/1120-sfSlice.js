import { createSlice } from '@reduxjs/toolkit';
interface;
1120 - SFState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-SFState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1120 - sfSlice;
createSlice({
    name: '1120-sf',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120 - sfSlice.actions;
export default 1120 - sfSlice.reducer;
// Selectors
export const select1120;
-SFValues;
(state) => state;
.1120 - sf.values;
export const select1120;
-SFErrors;
(state) => state;
.1120 - sf.errors;
export const select1120;
-SFIsComplete;
(state) => state;
.1120 - sf.isComplete;
export const select1120;
-SFCalculatedLines;
(state) => state;
.1120 - sf.calculatedLines;
