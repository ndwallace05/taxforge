import { createSlice } from '@reduxjs/toolkit';
interface;
8812;
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
8812;
Slice = createSlice({
    name: '8812',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8812, Slice, actions;
export default 8812;
Slice.reducer;
// Selectors
export const select8812Values = (state) => state;
.8812.values;
export const select8812Errors = (state) => state;
.8812.errors;
export const select8812IsComplete = (state) => state;
.8812.isComplete;
export const select8812CalculatedLines = (state) => state;
.8812.calculatedLines;
