import { createSlice } from '@reduxjs/toolkit';
interface;
4720;
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
4720;
Slice = createSlice({
    name: '4720',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4720, Slice, actions;
export default 4720;
Slice.reducer;
// Selectors
export const select4720Values = (state) => state;
.4720.values;
export const select4720Errors = (state) => state;
.4720.errors;
export const select4720IsComplete = (state) => state;
.4720.isComplete;
export const select4720CalculatedLines = (state) => state;
.4720.calculatedLines;
