import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8582State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8582State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8582Slice = createSlice({
  name: '8582',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8582Slice.actions;
export default 8582Slice.reducer;

// Selectors
export const select8582Values = (state: any) => state.8582.values;
export const select8582Errors = (state: any) => state.8582.errors;
export const select8582IsComplete = (state: any) => state.8582.isComplete;
export const select8582CalculatedLines = (state: any) => state.8582.calculatedLines;
