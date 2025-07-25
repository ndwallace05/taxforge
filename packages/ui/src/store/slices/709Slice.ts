import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 709State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 709State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 709Slice = createSlice({
  name: '709',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 709Slice.actions;
export default 709Slice.reducer;

// Selectors
export const select709Values = (state: any) => state.709.values;
export const select709Errors = (state: any) => state.709.errors;
export const select709IsComplete = (state: any) => state.709.isComplete;
export const select709CalculatedLines = (state: any) => state.709.calculatedLines;
