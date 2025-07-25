import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8853State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8853State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8853Slice = createSlice({
  name: '8853',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8853Slice.actions;
export default 8853Slice.reducer;

// Selectors
export const select8853Values = (state: any) => state.8853.values;
export const select8853Errors = (state: any) => state.8853.errors;
export const select8853IsComplete = (state: any) => state.8853.isComplete;
export const select8853CalculatedLines = (state: any) => state.8853.calculatedLines;
