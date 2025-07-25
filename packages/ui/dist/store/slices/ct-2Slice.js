import { createSlice } from '@reduxjs/toolkit';
-2;
State;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-2;
State = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const ct;
-2;
Slice = createSlice({
    name: 'ct-2',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = ct - 2, Slice, actions;
export default ct - 2;
Slice.reducer;
// Selectors
export const selectCT;
-2;
Values = (state) => state.ct - 2.;
values;
export const selectCT;
-2E;
rrors = (state) => state.ct - 2.e;
rrors;
export const selectCT;
-2;
IsComplete = (state) => state.ct - 2.;
isComplete;
export const selectCT;
-2;
CalculatedLines = (state) => state.ct - 2.;
calculatedLines;
