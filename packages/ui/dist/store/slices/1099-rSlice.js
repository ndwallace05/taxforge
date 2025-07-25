import { createSlice } from '@reduxjs/toolkit';
interface;
1099 - RState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-RState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1099 - rSlice;
createSlice({
    name: '1099-r',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099 - rSlice.actions;
export default 1099 - rSlice.reducer;
// Selectors
export const select1099;
-RValues;
(state) => state;
.1099 - r.values;
export const select1099;
-RErrors;
(state) => state;
.1099 - r.errors;
export const select1099;
-RIsComplete;
(state) => state;
.1099 - r.isComplete;
export const select1099;
-RCalculatedLines;
(state) => state;
.1099 - r.calculatedLines;
