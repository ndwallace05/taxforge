import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8870State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8870State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8870Slice = createSlice({
  name: '8870',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8870Slice.actions;
export default 8870Slice.reducer;

// Selectors
export const select8870Values = (state: any) => state.8870.values;
export const select8870Errors = (state: any) => state.8870.errors;
export const select8870IsComplete = (state: any) => state.8870.isComplete;
export const select8870CalculatedLines = (state: any) => state.8870.calculatedLines;
