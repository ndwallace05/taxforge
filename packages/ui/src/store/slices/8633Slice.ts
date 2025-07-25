import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8633State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8633State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8633Slice = createSlice({
  name: '8633',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8633Slice.actions;
export default 8633Slice.reducer;

// Selectors
export const select8633Values = (state: any) => state.8633.values;
export const select8633Errors = (state: any) => state.8633.errors;
export const select8633IsComplete = (state: any) => state.8633.isComplete;
export const select8633CalculatedLines = (state: any) => state.8633.calculatedLines;
