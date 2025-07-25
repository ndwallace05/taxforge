import { createSlice } from '@reduxjs/toolkit';
interface;
1041;
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
1041;
Slice = createSlice({
    name: '1041',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1041, Slice, actions;
export default 1041;
Slice.reducer;
// Selectors
export const select1041Values = (state) => state;
.1041.values;
export const select1041Errors = (state) => state;
.1041.errors;
export const select1041IsComplete = (state) => state;
.1041.isComplete;
export const select1041CalculatedLines = (state) => state;
.1041.calculatedLines;
