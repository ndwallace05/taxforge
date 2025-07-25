import { createSlice } from '@reduxjs/toolkit';
interface;
5300;
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
5300;
Slice = createSlice({
    name: '5300',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5300, Slice, actions;
export default 5300;
Slice.reducer;
// Selectors
export const select5300Values = (state) => state;
.5300.values;
export const select5300Errors = (state) => state;
.5300.errors;
export const select5300IsComplete = (state) => state;
.5300.isComplete;
export const select5300CalculatedLines = (state) => state;
.5300.calculatedLines;
