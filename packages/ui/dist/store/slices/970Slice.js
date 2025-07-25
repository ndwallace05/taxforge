import { createSlice } from '@reduxjs/toolkit';
interface;
970;
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
970;
Slice = createSlice({
    name: '970',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 970, Slice, actions;
export default 970;
Slice.reducer;
// Selectors
export const select970Values = (state) => state;
.970.values;
export const select970Errors = (state) => state;
.970.errors;
export const select970IsComplete = (state) => state;
.970.isComplete;
export const select970CalculatedLines = (state) => state;
.970.calculatedLines;
