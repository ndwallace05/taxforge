import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SS-8State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: SS-8State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const ss-8Slice = createSlice({
  name: 'ss-8',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = ss-8Slice.actions;
export default ss-8Slice.reducer;

// Selectors
export const selectSS-8Values = (state: any) => state.ss-8.values;
export const selectSS-8Errors = (state: any) => state.ss-8.errors;
export const selectSS-8IsComplete = (state: any) => state.ss-8.isComplete;
export const selectSS-8CalculatedLines = (state: any) => state.ss-8.calculatedLines;
