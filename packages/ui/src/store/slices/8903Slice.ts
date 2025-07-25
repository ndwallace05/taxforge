import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8903State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8903State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8903Slice = createSlice({
  name: '8903',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8903Slice.actions;
export default 8903Slice.reducer;

// Selectors
export const select8903Values = (state: any) => state.8903.values;
export const select8903Errors = (state: any) => state.8903.errors;
export const select8903IsComplete = (state: any) => state.8903.isComplete;
export const select8903CalculatedLines = (state: any) => state.8903.calculatedLines;
