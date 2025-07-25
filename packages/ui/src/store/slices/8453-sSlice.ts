import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8453-SState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8453-SState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8453-sSlice = createSlice({
  name: '8453-s',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8453-sSlice.actions;
export default 8453-sSlice.reducer;

// Selectors
export const select8453-SValues = (state: any) => state.8453-s.values;
export const select8453-SErrors = (state: any) => state.8453-s.errors;
export const select8453-SIsComplete = (state: any) => state.8453-s.isComplete;
export const select8453-SCalculatedLines = (state: any) => state.8453-s.calculatedLines;
