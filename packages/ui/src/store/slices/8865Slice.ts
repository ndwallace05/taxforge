import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8865State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8865State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8865Slice = createSlice({
  name: '8865',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8865Slice.actions;
export default 8865Slice.reducer;

// Selectors
export const select8865Values = (state: any) => state.8865.values;
export const select8865Errors = (state: any) => state.8865.errors;
export const select8865IsComplete = (state: any) => state.8865.isComplete;
export const select8865CalculatedLines = (state: any) => state.8865.calculatedLines;
