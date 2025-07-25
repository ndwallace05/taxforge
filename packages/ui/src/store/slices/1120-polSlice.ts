import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1120-POLState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1120-POLState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1120-polSlice = createSlice({
  name: '1120-pol',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120-polSlice.actions;
export default 1120-polSlice.reducer;

// Selectors
export const select1120-POLValues = (state: any) => state.1120-pol.values;
export const select1120-POLErrors = (state: any) => state.1120-pol.errors;
export const select1120-POLIsComplete = (state: any) => state.1120-pol.isComplete;
export const select1120-POLCalculatedLines = (state: any) => state.1120-pol.calculatedLines;
