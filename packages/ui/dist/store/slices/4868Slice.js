import { createSlice } from '@reduxjs/toolkit';
interface;
4868;
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
4868;
Slice = createSlice({
    name: '4868',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4868, Slice, actions;
export default 4868;
Slice.reducer;
// Selectors
export const select4868Values = (state) => state;
.4868.values;
export const select4868Errors = (state) => state;
.4868.errors;
export const select4868IsComplete = (state) => state;
.4868.isComplete;
export const select4868CalculatedLines = (state) => state;
.4868.calculatedLines;
