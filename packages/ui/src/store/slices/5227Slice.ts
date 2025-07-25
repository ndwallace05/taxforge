import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5227State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5227State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5227Slice = createSlice({
  name: '5227',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5227Slice.actions;
export default 5227Slice.reducer;

// Selectors
export const select5227Values = (state: any) => state.5227.values;
export const select5227Errors = (state: any) => state.5227.errors;
export const select5227IsComplete = (state: any) => state.5227.isComplete;
export const select5227CalculatedLines = (state: any) => state.5227.calculatedLines;
