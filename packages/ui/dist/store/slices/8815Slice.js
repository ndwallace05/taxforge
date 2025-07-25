import { createSlice } from '@reduxjs/toolkit';
interface;
8815;
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
8815;
Slice = createSlice({
    name: '8815',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8815, Slice, actions;
export default 8815;
Slice.reducer;
// Selectors
export const select8815Values = (state) => state;
.8815.values;
export const select8815Errors = (state) => state;
.8815.errors;
export const select8815IsComplete = (state) => state;
.8815.isComplete;
export const select8815CalculatedLines = (state) => state;
.8815.calculatedLines;
