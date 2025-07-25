import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1098State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1098State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1098Slice = createSlice({
  name: '1098',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1098Slice.actions;
export default 1098Slice.reducer;

// Selectors
export const select1098Values = (state: any) => state.1098.values;
export const select1098Errors = (state: any) => state.1098.errors;
export const select1098IsComplete = (state: any) => state.1098.isComplete;
export const select1098CalculatedLines = (state: any) => state.1098.calculatedLines;
