import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5500State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5500State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5500Slice = createSlice({
  name: '5500',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5500Slice.actions;
export default 5500Slice.reducer;

// Selectors
export const select5500Values = (state: any) => state.5500.values;
export const select5500Errors = (state: any) => state.5500.errors;
export const select5500IsComplete = (state: any) => state.5500.isComplete;
export const select5500CalculatedLines = (state: any) => state.5500.calculatedLines;
