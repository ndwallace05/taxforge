import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 2553State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 2553State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 2553Slice = createSlice({
  name: '2553',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2553Slice.actions;
export default 2553Slice.reducer;

// Selectors
export const select2553Values = (state: any) => state.2553.values;
export const select2553Errors = (state: any) => state.2553.errors;
export const select2553IsComplete = (state: any) => state.2553.isComplete;
export const select2553CalculatedLines = (state: any) => state.2553.calculatedLines;
