import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8453-CState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8453-CState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8453-cSlice = createSlice({
  name: '8453-c',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8453-cSlice.actions;
export default 8453-cSlice.reducer;

// Selectors
export const select8453-CValues = (state: any) => state.8453-c.values;
export const select8453-CErrors = (state: any) => state.8453-c.errors;
export const select8453-CIsComplete = (state: any) => state.8453-c.isComplete;
export const select8453-CCalculatedLines = (state: any) => state.8453-c.calculatedLines;
