import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 3800State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 3800State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 3800Slice = createSlice({
  name: '3800',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 3800Slice.actions;
export default 3800Slice.reducer;

// Selectors
export const select3800Values = (state: any) => state.3800.values;
export const select3800Errors = (state: any) => state.3800.errors;
export const select3800IsComplete = (state: any) => state.3800.isComplete;
export const select3800CalculatedLines = (state: any) => state.3800.calculatedLines;
