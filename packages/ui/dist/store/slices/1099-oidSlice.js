import { createSlice } from '@reduxjs/toolkit';
interface;
1099 - OIDState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-OIDState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1099 - oidSlice;
createSlice({
    name: '1099-oid',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099 - oidSlice.actions;
export default 1099 - oidSlice.reducer;
// Selectors
export const select1099;
-OIDValues;
(state) => state;
.1099 - oid.values;
export const select1099;
-OIDErrors;
(state) => state;
.1099 - oid.errors;
export const select1099;
-OIDIsComplete;
(state) => state;
.1099 - oid.isComplete;
export const select1099;
-OIDCalculatedLines;
(state) => state;
.1099 - oid.calculatedLines;
