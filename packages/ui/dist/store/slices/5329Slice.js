import { createSlice } from '@reduxjs/toolkit';
interface;
5329;
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
5329;
Slice = createSlice({
    name: '5329',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5329, Slice, actions;
export default 5329;
Slice.reducer;
// Selectors
export const select5329Values = (state) => state;
.5329.values;
export const select5329Errors = (state) => state;
.5329.errors;
export const select5329IsComplete = (state) => state;
.5329.isComplete;
export const select5329CalculatedLines = (state) => state;
.5329.calculatedLines;
