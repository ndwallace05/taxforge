import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 2106State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 2106State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 2106Slice = createSlice({
  name: '2106',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2106Slice.actions;
export default 2106Slice.reducer;

// Selectors
export const select2106Values = (state: any) => state.2106.values;
export const select2106Errors = (state: any) => state.2106.errors;
export const select2106IsComplete = (state: any) => state.2106.isComplete;
export const select2106CalculatedLines = (state: any) => state.2106.calculatedLines;
