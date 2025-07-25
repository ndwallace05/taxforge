import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5498-ESAState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5498-ESAState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5498-esaSlice = createSlice({
  name: '5498-esa',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5498-esaSlice.actions;
export default 5498-esaSlice.reducer;

// Selectors
export const select5498-ESAValues = (state: any) => state.5498-esa.values;
export const select5498-ESAErrors = (state: any) => state.5498-esa.errors;
export const select5498-ESAIsComplete = (state: any) => state.5498-esa.isComplete;
export const select5498-ESACalculatedLines = (state: any) => state.5498-esa.calculatedLines;
