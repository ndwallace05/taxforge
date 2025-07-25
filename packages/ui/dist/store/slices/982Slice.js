import { createSlice } from '@reduxjs/toolkit';
interface;
982;
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
982;
Slice = createSlice({
    name: '982',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 982, Slice, actions;
export default 982;
Slice.reducer;
// Selectors
export const select982Values = (state) => state;
.982.values;
export const select982Errors = (state) => state;
.982.errors;
export const select982IsComplete = (state) => state;
.982.isComplete;
export const select982CalculatedLines = (state) => state;
.982.calculatedLines;
