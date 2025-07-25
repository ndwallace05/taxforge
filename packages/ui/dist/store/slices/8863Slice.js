import { createSlice } from '@reduxjs/toolkit';
interface;
8863;
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
8863;
Slice = createSlice({
    name: '8863',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8863, Slice, actions;
export default 8863;
Slice.reducer;
// Selectors
export const select8863Values = (state) => state;
.8863.values;
export const select8863Errors = (state) => state;
.8863.errors;
export const select8863IsComplete = (state) => state;
.8863.isComplete;
export const select8863CalculatedLines = (state) => state;
.8863.calculatedLines;
