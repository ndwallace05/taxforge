import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8814State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8814State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8814Slice = createSlice({
  name: '8814',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8814Slice.actions;
export default 8814Slice.reducer;

// Selectors
export const select8814Values = (state: any) => state.8814.values;
export const select8814Errors = (state: any) => state.8814.errors;
export const select8814IsComplete = (state: any) => state.8814.isComplete;
export const select8814CalculatedLines = (state: any) => state.8814.calculatedLines;
