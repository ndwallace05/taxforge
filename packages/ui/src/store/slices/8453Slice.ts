import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8453State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8453State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8453Slice = createSlice({
  name: '8453',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8453Slice.actions;
export default 8453Slice.reducer;

// Selectors
export const select8453Values = (state: any) => state.8453.values;
export const select8453Errors = (state: any) => state.8453.errors;
export const select8453IsComplete = (state: any) => state.8453.isComplete;
export const select8453CalculatedLines = (state: any) => state.8453.calculatedLines;
