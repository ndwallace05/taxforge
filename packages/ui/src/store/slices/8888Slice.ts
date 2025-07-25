import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8888State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8888State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8888Slice = createSlice({
  name: '8888',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8888Slice.actions;
export default 8888Slice.reducer;

// Selectors
export const select8888Values = (state: any) => state.8888.values;
export const select8888Errors = (state: any) => state.8888.errors;
export const select8888IsComplete = (state: any) => state.8888.isComplete;
export const select8888CalculatedLines = (state: any) => state.8888.calculatedLines;
