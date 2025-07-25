import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8839State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8839State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8839Slice = createSlice({
  name: '8839',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8839Slice.actions;
export default 8839Slice.reducer;

// Selectors
export const select8839Values = (state: any) => state.8839.values;
export const select8839Errors = (state: any) => state.8839.errors;
export const select8839IsComplete = (state: any) => state.8839.isComplete;
export const select8839CalculatedLines = (state: any) => state.8839.calculatedLines;
