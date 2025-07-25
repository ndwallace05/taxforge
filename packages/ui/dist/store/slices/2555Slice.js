import { createSlice } from '@reduxjs/toolkit';
interface;
2555;
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
2555;
Slice = createSlice({
    name: '2555',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2555, Slice, actions;
export default 2555;
Slice.reducer;
// Selectors
export const select2555Values = (state) => state;
.2555.values;
export const select2555Errors = (state) => state;
.2555.errors;
export const select2555IsComplete = (state) => state;
.2555.isComplete;
export const select2555CalculatedLines = (state) => state;
.2555.calculatedLines;
