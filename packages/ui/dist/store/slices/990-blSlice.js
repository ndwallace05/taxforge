import { createSlice } from '@reduxjs/toolkit';
interface;
990 - BLState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-BLState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
990 - blSlice;
createSlice({
    name: '990-bl',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 990 - blSlice.actions;
export default 990 - blSlice.reducer;
// Selectors
export const select990;
-BLValues;
(state) => state;
.990 - bl.values;
export const select990;
-BLErrors;
(state) => state;
.990 - bl.errors;
export const select990;
-BLIsComplete;
(state) => state;
.990 - bl.isComplete;
export const select990;
-BLCalculatedLines;
(state) => state;
.990 - bl.calculatedLines;
