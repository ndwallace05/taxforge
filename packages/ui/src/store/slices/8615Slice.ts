import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8615State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8615State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8615Slice = createSlice({
  name: '8615',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8615Slice.actions;
export default 8615Slice.reducer;

// Selectors
export const select8615Values = (state: any) => state.8615.values;
export const select8615Errors = (state: any) => state.8615.errors;
export const select8615IsComplete = (state: any) => state.8615.isComplete;
export const select8615CalculatedLines = (state: any) => state.8615.calculatedLines;
