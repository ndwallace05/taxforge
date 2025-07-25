import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 3468State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 3468State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 3468Slice = createSlice({
  name: '3468',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 3468Slice.actions;
export default 3468Slice.reducer;

// Selectors
export const select3468Values = (state: any) => state.3468.values;
export const select3468Errors = (state: any) => state.3468.errors;
export const select3468IsComplete = (state: any) => state.3468.isComplete;
export const select3468CalculatedLines = (state: any) => state.3468.calculatedLines;
