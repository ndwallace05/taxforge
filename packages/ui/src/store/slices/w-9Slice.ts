import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface W-9State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: W-9State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const w-9Slice = createSlice({
  name: 'w-9',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = w-9Slice.actions;
export default w-9Slice.reducer;

// Selectors
export const selectW-9Values = (state: any) => state.w-9.values;
export const selectW-9Errors = (state: any) => state.w-9.errors;
export const selectW-9IsComplete = (state: any) => state.w-9.isComplete;
export const selectW-9CalculatedLines = (state: any) => state.w-9.calculatedLines;
