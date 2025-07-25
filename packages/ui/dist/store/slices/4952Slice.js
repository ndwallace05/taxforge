import { createSlice } from '@reduxjs/toolkit';
interface;
4952;
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
4952;
Slice = createSlice({
    name: '4952',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4952, Slice, actions;
export default 4952;
Slice.reducer;
// Selectors
export const select4952Values = (state) => state;
.4952.values;
export const select4952Errors = (state) => state;
.4952.errors;
export const select4952IsComplete = (state) => state;
.4952.isComplete;
export const select4952CalculatedLines = (state) => state;
.4952.calculatedLines;
