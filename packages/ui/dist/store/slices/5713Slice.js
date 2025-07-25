import { createSlice } from '@reduxjs/toolkit';
interface;
5713;
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
5713;
Slice = createSlice({
    name: '5713',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5713, Slice, actions;
export default 5713;
Slice.reducer;
// Selectors
export const select5713Values = (state) => state;
.5713.values;
export const select5713Errors = (state) => state;
.5713.errors;
export const select5713IsComplete = (state) => state;
.5713.isComplete;
export const select5713CalculatedLines = (state) => state;
.5713.calculatedLines;
