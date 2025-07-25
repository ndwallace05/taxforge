import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5471State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5471State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5471Slice = createSlice({
  name: '5471',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5471Slice.actions;
export default 5471Slice.reducer;

// Selectors
export const select5471Values = (state: any) => state.5471.values;
export const select5471Errors = (state: any) => state.5471.errors;
export const select5471IsComplete = (state: any) => state.5471.isComplete;
export const select5471CalculatedLines = (state: any) => state.5471.calculatedLines;
