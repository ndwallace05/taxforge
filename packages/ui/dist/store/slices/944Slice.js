import { createSlice } from '@reduxjs/toolkit';
interface;
944;
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
944;
Slice = createSlice({
    name: '944',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 944, Slice, actions;
export default 944;
Slice.reducer;
// Selectors
export const select944Values = (state) => state;
.944.values;
export const select944Errors = (state) => state;
.944.errors;
export const select944IsComplete = (state) => state;
.944.isComplete;
export const select944CalculatedLines = (state) => state;
.944.calculatedLines;
