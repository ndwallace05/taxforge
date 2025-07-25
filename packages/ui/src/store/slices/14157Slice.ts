import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 14157State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 14157State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 14157Slice = createSlice({
  name: '14157',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 14157Slice.actions;
export default 14157Slice.reducer;

// Selectors
export const select14157Values = (state: any) => state.14157.values;
export const select14157Errors = (state: any) => state.14157.errors;
export const select14157IsComplete = (state: any) => state.14157.isComplete;
export const select14157CalculatedLines = (state: any) => state.14157.calculatedLines;
