import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 2120State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 2120State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 2120Slice = createSlice({
  name: '2120',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2120Slice.actions;
export default 2120Slice.reducer;

// Selectors
export const select2120Values = (state: any) => state.2120.values;
export const select2120Errors = (state: any) => state.2120.errors;
export const select2120IsComplete = (state: any) => state.2120.isComplete;
export const select2120CalculatedLines = (state: any) => state.2120.calculatedLines;
