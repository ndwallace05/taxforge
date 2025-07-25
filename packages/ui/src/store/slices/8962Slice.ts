import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8962State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8962State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8962Slice = createSlice({
  name: '8962',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8962Slice.actions;
export default 8962Slice.reducer;

// Selectors
export const select8962Values = (state: any) => state.8962.values;
export const select8962Errors = (state: any) => state.8962.errors;
export const select8962IsComplete = (state: any) => state.8962.isComplete;
export const select8962CalculatedLines = (state: any) => state.8962.calculatedLines;
