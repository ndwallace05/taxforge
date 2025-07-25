import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8917State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8917State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8917Slice = createSlice({
  name: '8917',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8917Slice.actions;
export default 8917Slice.reducer;

// Selectors
export const select8917Values = (state: any) => state.8917.values;
export const select8917Errors = (state: any) => state.8917.errors;
export const select8917IsComplete = (state: any) => state.8917.isComplete;
export const select8917CalculatedLines = (state: any) => state.8917.calculatedLines;
