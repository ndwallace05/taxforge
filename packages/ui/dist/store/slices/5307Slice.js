import { createSlice } from '@reduxjs/toolkit';
interface;
5307;
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
5307;
Slice = createSlice({
    name: '5307',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5307, Slice, actions;
export default 5307;
Slice.reducer;
// Selectors
export const select5307Values = (state) => state;
.5307.values;
export const select5307Errors = (state) => state;
.5307.errors;
export const select5307IsComplete = (state) => state;
.5307.isComplete;
export const select5307CalculatedLines = (state) => state;
.5307.calculatedLines;
