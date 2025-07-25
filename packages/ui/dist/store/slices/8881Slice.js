import { createSlice } from '@reduxjs/toolkit';
interface;
8881;
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
8881;
Slice = createSlice({
    name: '8881',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8881, Slice, actions;
export default 8881;
Slice.reducer;
// Selectors
export const select8881Values = (state) => state;
.8881.values;
export const select8881Errors = (state) => state;
.8881.errors;
export const select8881IsComplete = (state) => state;
.8881.isComplete;
export const select8881CalculatedLines = (state) => state;
.8881.calculatedLines;
