import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8858State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8858State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8858Slice = createSlice({
  name: '8858',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8858Slice.actions;
export default 8858Slice.reducer;

// Selectors
export const select8858Values = (state: any) => state.8858.values;
export const select8858Errors = (state: any) => state.8858.errors;
export const select8858IsComplete = (state: any) => state.8858.isComplete;
export const select8858CalculatedLines = (state: any) => state.8858.calculatedLines;
