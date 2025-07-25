import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 945State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 945State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 945Slice = createSlice({
  name: '945',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 945Slice.actions;
export default 945Slice.reducer;

// Selectors
export const select945Values = (state: any) => state.945.values;
export const select945Errors = (state: any) => state.945.errors;
export const select945IsComplete = (state: any) => state.945.isComplete;
export const select945CalculatedLines = (state: any) => state.945.calculatedLines;
