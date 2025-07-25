import { createSlice } from '@reduxjs/toolkit';
interface;
3468;
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
3468;
Slice = createSlice({
    name: '3468',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 3468, Slice, actions;
export default 3468;
Slice.reducer;
// Selectors
export const select3468Values = (state) => state;
.3468.values;
export const select3468Errors = (state) => state;
.3468.errors;
export const select3468IsComplete = (state) => state;
.3468.isComplete;
export const select3468CalculatedLines = (state) => state;
.3468.calculatedLines;
