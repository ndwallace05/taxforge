import { createSlice } from '@reduxjs/toolkit';
interface;
1041 - ESState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-ESState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1041 - esSlice;
createSlice({
    name: '1041-es',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1041 - esSlice.actions;
export default 1041 - esSlice.reducer;
// Selectors
export const select1041;
-ESValues;
(state) => state;
.1041 - es.values;
export const select1041;
-ESErrors;
(state) => state;
.1041 - es.errors;
export const select1041;
-ESIsComplete;
(state) => state;
.1041 - es.isComplete;
export const select1041;
-ESCalculatedLines;
(state) => state;
.1041 - es.calculatedLines;
