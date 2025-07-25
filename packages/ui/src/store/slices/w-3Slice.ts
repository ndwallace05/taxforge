import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface W-3State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: W-3State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const w-3Slice = createSlice({
  name: 'w-3',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = w-3Slice.actions;
export default w-3Slice.reducer;

// Selectors
export const selectW-3Values = (state: any) => state.w-3.values;
export const selectW-3Errors = (state: any) => state.w-3.errors;
export const selectW-3IsComplete = (state: any) => state.w-3.isComplete;
export const selectW-3CalculatedLines = (state: any) => state.w-3.calculatedLines;
