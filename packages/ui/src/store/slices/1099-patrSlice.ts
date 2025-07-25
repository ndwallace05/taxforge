import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1099-PATRState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1099-PATRState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1099-patrSlice = createSlice({
  name: '1099-patr',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099-patrSlice.actions;
export default 1099-patrSlice.reducer;

// Selectors
export const select1099-PATRValues = (state: any) => state.1099-patr.values;
export const select1099-PATRErrors = (state: any) => state.1099-patr.errors;
export const select1099-PATRIsComplete = (state: any) => state.1099-patr.isComplete;
export const select1099-PATRCalculatedLines = (state: any) => state.1099-patr.calculatedLines;
