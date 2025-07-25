import { createSlice } from '@reduxjs/toolkit';
interface;
8948;
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
8948;
Slice = createSlice({
    name: '8948',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8948, Slice, actions;
export default 8948;
Slice.reducer;
// Selectors
export const select8948Values = (state) => state;
.8948.values;
export const select8948Errors = (state) => state;
.8948.errors;
export const select8948IsComplete = (state) => state;
.8948.isComplete;
export const select8948CalculatedLines = (state) => state;
.8948.calculatedLines;
