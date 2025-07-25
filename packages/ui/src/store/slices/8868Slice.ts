import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8868State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8868State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8868Slice = createSlice({
  name: '8868',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8868Slice.actions;
export default 8868Slice.reducer;

// Selectors
export const select8868Values = (state: any) => state.8868.values;
export const select8868Errors = (state: any) => state.8868.errors;
export const select8868IsComplete = (state: any) => state.8868.isComplete;
export const select8868CalculatedLines = (state: any) => state.8868.calculatedLines;
