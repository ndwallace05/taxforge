import { createSlice } from '@reduxjs/toolkit';
interface;
4684;
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
4684;
Slice = createSlice({
    name: '4684',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4684, Slice, actions;
export default 4684;
Slice.reducer;
// Selectors
export const select4684Values = (state) => state;
.4684.values;
export const select4684Errors = (state) => state;
.4684.errors;
export const select4684IsComplete = (state) => state;
.4684.isComplete;
export const select4684CalculatedLines = (state) => state;
.4684.calculatedLines;
