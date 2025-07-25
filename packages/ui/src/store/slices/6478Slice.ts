import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 6478State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 6478State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 6478Slice = createSlice({
  name: '6478',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 6478Slice.actions;
export default 6478Slice.reducer;

// Selectors
export const select6478Values = (state: any) => state.6478.values;
export const select6478Errors = (state: any) => state.6478.errors;
export const select6478IsComplete = (state: any) => state.6478.isComplete;
export const select6478CalculatedLines = (state: any) => state.6478.calculatedLines;
