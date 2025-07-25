import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 943State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 943State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 943Slice = createSlice({
  name: '943',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 943Slice.actions;
export default 943Slice.reducer;

// Selectors
export const select943Values = (state: any) => state.943.values;
export const select943Errors = (state: any) => state.943.errors;
export const select943IsComplete = (state: any) => state.943.isComplete;
export const select943CalculatedLines = (state: any) => state.943.calculatedLines;
