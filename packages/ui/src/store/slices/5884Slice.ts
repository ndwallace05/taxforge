import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5884State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5884State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5884Slice = createSlice({
  name: '5884',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5884Slice.actions;
export default 5884Slice.reducer;

// Selectors
export const select5884Values = (state: any) => state.5884.values;
export const select5884Errors = (state: any) => state.5884.errors;
export const select5884IsComplete = (state: any) => state.5884.isComplete;
export const select5884CalculatedLines = (state: any) => state.5884.calculatedLines;
