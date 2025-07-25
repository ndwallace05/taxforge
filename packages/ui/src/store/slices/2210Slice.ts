import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 2210State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 2210State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 2210Slice = createSlice({
  name: '2210',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2210Slice.actions;
export default 2210Slice.reducer;

// Selectors
export const select2210Values = (state: any) => state.2210.values;
export const select2210Errors = (state: any) => state.2210.errors;
export const select2210IsComplete = (state: any) => state.2210.isComplete;
export const select2210CalculatedLines = (state: any) => state.2210.calculatedLines;
