import { createSlice } from '@reduxjs/toolkit';
interface;
1099 - SState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-SState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1099 - sSlice;
createSlice({
    name: '1099-s',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099 - sSlice.actions;
export default 1099 - sSlice.reducer;
// Selectors
export const select1099;
-SValues;
(state) => state;
.1099 - s.values;
export const select1099;
-SErrors;
(state) => state;
.1099 - s.errors;
export const select1099;
-SIsComplete;
(state) => state;
.1099 - s.isComplete;
export const select1099;
-SCalculatedLines;
(state) => state;
.1099 - s.calculatedLines;
