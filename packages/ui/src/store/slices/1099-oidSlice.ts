import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1099-OIDState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1099-OIDState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1099-oidSlice = createSlice({
  name: '1099-oid',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<{ field: string; value: number | string }>) => {
      state.values[action.payload.field] = action.payload.value;
      // Clear error when value is set
      delete state.errors[action.payload.field];
    },
    setError: (state, action: PayloadAction<{ field: string; error: string }>) => {
      state.errors[action.payload.field] = action.payload.error;
    },
    setCalculatedValue: (state, action: PayloadAction<{ field: string; value: number }>) => {
      state.calculatedLines[action.payload.field] = action.payload.value;
    },
    setComplete: (state, action: PayloadAction<boolean>) => {
      state.isComplete = action.payload;
    },
    reset: () => initialState
  }
});

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099-oidSlice.actions;
export default 1099-oidSlice.reducer;

// Selectors
export const select1099-OIDValues = (state: any) => state.1099-oid.values;
export const select1099-OIDErrors = (state: any) => state.1099-oid.errors;
export const select1099-OIDIsComplete = (state: any) => state.1099-oid.isComplete;
export const select1099-OIDCalculatedLines = (state: any) => state.1099-oid.calculatedLines;
