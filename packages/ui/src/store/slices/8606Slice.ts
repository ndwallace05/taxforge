import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8606State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8606State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8606Slice = createSlice({
  name: '8606',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8606Slice.actions;
export default 8606Slice.reducer;

// Selectors
export const select8606Values = (state: any) => state.8606.values;
export const select8606Errors = (state: any) => state.8606.errors;
export const select8606IsComplete = (state: any) => state.8606.isComplete;
export const select8606CalculatedLines = (state: any) => state.8606.calculatedLines;
