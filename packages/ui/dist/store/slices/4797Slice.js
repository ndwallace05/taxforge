import { createSlice } from '@reduxjs/toolkit';
interface;
4797;
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
4797;
Slice = createSlice({
    name: '4797',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4797, Slice, actions;
export default 4797;
Slice.reducer;
// Selectors
export const select4797Values = (state) => state;
.4797.values;
export const select4797Errors = (state) => state;
.4797.errors;
export const select4797IsComplete = (state) => state;
.4797.isComplete;
export const select4797CalculatedLines = (state) => state;
.4797.calculatedLines;
