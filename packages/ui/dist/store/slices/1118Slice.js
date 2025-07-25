import { createSlice } from '@reduxjs/toolkit';
interface;
1118;
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
1118;
Slice = createSlice({
    name: '1118',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1118, Slice, actions;
export default 1118;
Slice.reducer;
// Selectors
export const select1118Values = (state) => state;
.1118.values;
export const select1118Errors = (state) => state;
.1118.errors;
export const select1118IsComplete = (state) => state;
.1118.isComplete;
export const select1118CalculatedLines = (state) => state;
.1118.calculatedLines;
