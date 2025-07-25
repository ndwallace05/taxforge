import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8919State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8919State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8919Slice = createSlice({
  name: '8919',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8919Slice.actions;
export default 8919Slice.reducer;

// Selectors
export const select8919Values = (state: any) => state.8919.values;
export const select8919Errors = (state: any) => state.8919.errors;
export const select8919IsComplete = (state: any) => state.8919.isComplete;
export const select8919CalculatedLines = (state: any) => state.8919.calculatedLines;
