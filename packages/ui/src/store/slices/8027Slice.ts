import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8027State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8027State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8027Slice = createSlice({
  name: '8027',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8027Slice.actions;
export default 8027Slice.reducer;

// Selectors
export const select8027Values = (state: any) => state.8027.values;
export const select8027Errors = (state: any) => state.8027.errors;
export const select8027IsComplete = (state: any) => state.8027.isComplete;
export const select8027CalculatedLines = (state: any) => state.8027.calculatedLines;
