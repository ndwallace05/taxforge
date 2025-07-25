import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 15109State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 15109State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 15109Slice = createSlice({
  name: '15109',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 15109Slice.actions;
export default 15109Slice.reducer;

// Selectors
export const select15109Values = (state: any) => state.15109.values;
export const select15109Errors = (state: any) => state.15109.errors;
export const select15109IsComplete = (state: any) => state.15109.isComplete;
export const select15109CalculatedLines = (state: any) => state.15109.calculatedLines;
