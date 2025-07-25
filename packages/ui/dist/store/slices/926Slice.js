import { createSlice } from '@reduxjs/toolkit';
interface;
926;
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
926;
Slice = createSlice({
    name: '926',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 926, Slice, actions;
export default 926;
Slice.reducer;
// Selectors
export const select926Values = (state) => state;
.926.values;
export const select926Errors = (state) => state;
.926.errors;
export const select926IsComplete = (state) => state;
.926.isComplete;
export const select926CalculatedLines = (state) => state;
.926.calculatedLines;
