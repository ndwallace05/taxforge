import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8889State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8889State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8889Slice = createSlice({
  name: '8889',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8889Slice.actions;
export default 8889Slice.reducer;

// Selectors
export const select8889Values = (state: any) => state.8889.values;
export const select8889Errors = (state: any) => state.8889.errors;
export const select8889IsComplete = (state: any) => state.8889.isComplete;
export const select8889CalculatedLines = (state: any) => state.8889.calculatedLines;
