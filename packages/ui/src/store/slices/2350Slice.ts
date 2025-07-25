import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 2350State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 2350State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 2350Slice = createSlice({
  name: '2350',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2350Slice.actions;
export default 2350Slice.reducer;

// Selectors
export const select2350Values = (state: any) => state.2350.values;
export const select2350Errors = (state: any) => state.2350.errors;
export const select2350IsComplete = (state: any) => state.2350.isComplete;
export const select2350CalculatedLines = (state: any) => state.2350.calculatedLines;
