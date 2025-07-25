import { createSlice } from '@reduxjs/toolkit';
interface;
8818;
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
8818;
Slice = createSlice({
    name: '8818',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8818, Slice, actions;
export default 8818;
Slice.reducer;
// Selectors
export const select8818Values = (state) => state;
.8818.values;
export const select8818Errors = (state) => state;
.8818.errors;
export const select8818IsComplete = (state) => state;
.8818.isComplete;
export const select8818CalculatedLines = (state) => state;
.8818.calculatedLines;
