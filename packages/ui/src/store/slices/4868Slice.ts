import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 4868State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 4868State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 4868Slice = createSlice({
  name: '4868',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4868Slice.actions;
export default 4868Slice.reducer;

// Selectors
export const select4868Values = (state: any) => state.4868.values;
export const select4868Errors = (state: any) => state.4868.errors;
export const select4868IsComplete = (state: any) => state.4868.isComplete;
export const select4868CalculatedLines = (state: any) => state.4868.calculatedLines;
