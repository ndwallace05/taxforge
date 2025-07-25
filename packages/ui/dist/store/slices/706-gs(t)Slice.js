import { createSlice } from '@reduxjs/toolkit';
interface;
706 - GS(T);
State;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-GS(T);
State = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const ;
706 - gs(t);
Slice = createSlice({
    name: '706-gs(t)',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 706 - gs(t), Slice, actions;
export default 706 - gs(t);
Slice.reducer;
// Selectors
export const select706;
-GS(T);
Values = (state) => state;
.706 - gs(t).values;
export const select706;
-GS(T);
Errors = (state) => state;
.706 - gs(t).errors;
export const select706;
-GS(T);
IsComplete = (state) => state;
.706 - gs(t).isComplete;
export const select706;
-GS(T);
CalculatedLines = (state) => state;
.706 - gs(t).calculatedLines;
