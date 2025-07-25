import { createSlice } from '@reduxjs/toolkit';
interface;
1041 - NState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-NState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1041 - nSlice;
createSlice({
    name: '1041-n',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1041 - nSlice.actions;
export default 1041 - nSlice.reducer;
// Selectors
export const select1041;
-NValues;
(state) => state;
.1041 - n.values;
export const select1041;
-NErrors;
(state) => state;
.1041 - n.errors;
export const select1041;
-NIsComplete;
(state) => state;
.1041 - n.isComplete;
export const select1041;
-NCalculatedLines;
(state) => state;
.1041 - n.calculatedLines;
