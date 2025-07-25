import { createSlice } from '@reduxjs/toolkit';
interface;
3520;
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
3520;
Slice = createSlice({
    name: '3520',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 3520, Slice, actions;
export default 3520;
Slice.reducer;
// Selectors
export const select3520Values = (state) => state;
.3520.values;
export const select3520Errors = (state) => state;
.3520.errors;
export const select3520IsComplete = (state) => state;
.3520.isComplete;
export const select3520CalculatedLines = (state) => state;
.3520.calculatedLines;
