import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 990State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 990State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 990Slice = createSlice({
  name: '990',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 990Slice.actions;
export default 990Slice.reducer;

// Selectors
export const select990Values = (state: any) => state.990.values;
export const select990Errors = (state: any) => state.990.errors;
export const select990IsComplete = (state: any) => state.990.isComplete;
export const select990CalculatedLines = (state: any) => state.990.calculatedLines;
