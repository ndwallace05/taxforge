import { createSlice } from '@reduxjs/toolkit';
interface;
1099 - BState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-BState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1099 - bSlice;
createSlice({
    name: '1099-b',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099 - bSlice.actions;
export default 1099 - bSlice.reducer;
// Selectors
export const select1099;
-BValues;
(state) => state;
.1099 - b.values;
export const select1099;
-BErrors;
(state) => state;
.1099 - b.errors;
export const select1099;
-BIsComplete;
(state) => state;
.1099 - b.isComplete;
export const select1099;
-BCalculatedLines;
(state) => state;
.1099 - b.calculatedLines;
