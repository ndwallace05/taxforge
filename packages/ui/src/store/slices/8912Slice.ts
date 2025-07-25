import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8912State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8912State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8912Slice = createSlice({
  name: '8912',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8912Slice.actions;
export default 8912Slice.reducer;

// Selectors
export const select8912Values = (state: any) => state.8912.values;
export const select8912Errors = (state: any) => state.8912.errors;
export const select8912IsComplete = (state: any) => state.8912.isComplete;
export const select8912CalculatedLines = (state: any) => state.8912.calculatedLines;
