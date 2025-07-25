import { createSlice } from '@reduxjs/toolkit';
interface;
8862;
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
8862;
Slice = createSlice({
    name: '8862',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8862, Slice, actions;
export default 8862;
Slice.reducer;
// Selectors
export const select8862Values = (state) => state;
.8862.values;
export const select8862Errors = (state) => state;
.8862.errors;
export const select8862IsComplete = (state) => state;
.8862.isComplete;
export const select8862CalculatedLines = (state) => state;
.8862.calculatedLines;
