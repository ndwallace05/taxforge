import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5330State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5330State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5330Slice = createSlice({
  name: '5330',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5330Slice.actions;
export default 5330Slice.reducer;

// Selectors
export const select5330Values = (state: any) => state.5330.values;
export const select5330Errors = (state: any) => state.5330.errors;
export const select5330IsComplete = (state: any) => state.5330.isComplete;
export const select5330CalculatedLines = (state: any) => state.5330.calculatedLines;
