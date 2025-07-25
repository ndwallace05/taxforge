import { createSlice } from '@reduxjs/toolkit';
interface;
8962;
State;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState, State = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const ;
8962;
Slice = createSlice({
    name: '8962',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8962, Slice, actions;
export default 8962;
Slice.reducer;
// Selectors
export const select8962Values = (state) => state;
.8962.values;
export const select8962Errors = (state) => state;
.8962.errors;
export const select8962IsComplete = (state) => state;
.8962.isComplete;
export const select8962CalculatedLines = (state) => state;
.8962.calculatedLines;
