import { createSlice } from '@reduxjs/toolkit';
interface;
8802;
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
8802;
Slice = createSlice({
    name: '8802',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8802, Slice, actions;
export default 8802;
Slice.reducer;
// Selectors
export const select8802Values = (state) => state;
.8802.values;
export const select8802Errors = (state) => state;
.8802.errors;
export const select8802IsComplete = (state) => state;
.8802.isComplete;
export const select8802CalculatedLines = (state) => state;
.8802.calculatedLines;
