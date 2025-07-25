import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 6765State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 6765State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 6765Slice = createSlice({
  name: '6765',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 6765Slice.actions;
export default 6765Slice.reducer;

// Selectors
export const select6765Values = (state: any) => state.6765.values;
export const select6765Errors = (state: any) => state.6765.errors;
export const select6765IsComplete = (state: any) => state.6765.isComplete;
export const select6765CalculatedLines = (state: any) => state.6765.calculatedLines;
