import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SS-4State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: SS-4State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const ss-4Slice = createSlice({
  name: 'ss-4',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = ss-4Slice.actions;
export default ss-4Slice.reducer;

// Selectors
export const selectSS-4Values = (state: any) => state.ss-4.values;
export const selectSS-4Errors = (state: any) => state.ss-4.errors;
export const selectSS-4IsComplete = (state: any) => state.ss-4.isComplete;
export const selectSS-4CalculatedLines = (state: any) => state.ss-4.calculatedLines;
