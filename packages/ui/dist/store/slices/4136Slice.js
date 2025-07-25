import { createSlice } from '@reduxjs/toolkit';
interface;
4136;
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
4136;
Slice = createSlice({
    name: '4136',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4136, Slice, actions;
export default 4136;
Slice.reducer;
// Selectors
export const select4136Values = (state) => state;
.4136.values;
export const select4136Errors = (state) => state;
.4136.errors;
export const select4136IsComplete = (state) => state;
.4136.isComplete;
export const select4136CalculatedLines = (state) => state;
.4136.calculatedLines;
