import { createSlice } from '@reduxjs/toolkit';
interface;
1120 - SState;
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
1120 - sSlice;
createSlice({
    name: '1120-s',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120 - sSlice.actions;
export default 1120 - sSlice.reducer;
// Selectors
export const select1120;
-SValues;
(state) => state;
.1120 - s.values;
export const select1120;
-SErrors;
(state) => state;
.1120 - s.errors;
export const select1120;
-SIsComplete;
(state) => state;
.1120 - s.isComplete;
export const select1120;
-SCalculatedLines;
(state) => state;
.1120 - s.calculatedLines;
