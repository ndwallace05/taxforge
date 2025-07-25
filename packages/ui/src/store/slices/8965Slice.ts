import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8965State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8965State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8965Slice = createSlice({
  name: '8965',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8965Slice.actions;
export default 8965Slice.reducer;

// Selectors
export const select8965Values = (state: any) => state.8965.values;
export const select8965Errors = (state: any) => state.8965.errors;
export const select8965IsComplete = (state: any) => state.8965.isComplete;
export const select8965CalculatedLines = (state: any) => state.8965.calculatedLines;
