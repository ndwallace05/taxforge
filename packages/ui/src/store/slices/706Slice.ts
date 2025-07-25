import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 706State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 706State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 706Slice = createSlice({
  name: '706',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 706Slice.actions;
export default 706Slice.reducer;

// Selectors
export const select706Values = (state: any) => state.706.values;
export const select706Errors = (state: any) => state.706.errors;
export const select706IsComplete = (state: any) => state.706.isComplete;
export const select706CalculatedLines = (state: any) => state.706.calculatedLines;
