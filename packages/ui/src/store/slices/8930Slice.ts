import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8930State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8930State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8930Slice = createSlice({
  name: '8930',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8930Slice.actions;
export default 8930Slice.reducer;

// Selectors
export const select8930Values = (state: any) => state.8930.values;
export const select8930Errors = (state: any) => state.8930.errors;
export const select8930IsComplete = (state: any) => state.8930.isComplete;
export const select8930CalculatedLines = (state: any) => state.8930.calculatedLines;
