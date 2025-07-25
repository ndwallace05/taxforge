import { createSlice } from '@reduxjs/toolkit';
interface;
5695;
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
5695;
Slice = createSlice({
    name: '5695',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5695, Slice, actions;
export default 5695;
Slice.reducer;
// Selectors
export const select5695Values = (state) => state;
.5695.values;
export const select5695Errors = (state) => state;
.5695.errors;
export const select5695IsComplete = (state) => state;
.5695.isComplete;
export const select5695CalculatedLines = (state) => state;
.5695.calculatedLines;
