import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 4562State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 4562State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 4562Slice = createSlice({
  name: '4562',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4562Slice.actions;
export default 4562Slice.reducer;

// Selectors
export const select4562Values = (state: any) => state.4562.values;
export const select4562Errors = (state: any) => state.4562.errors;
export const select4562IsComplete = (state: any) => state.4562.isComplete;
export const select4562CalculatedLines = (state: any) => state.4562.calculatedLines;
