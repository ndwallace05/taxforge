import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 990-EZState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 990-EZState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 990-ezSlice = createSlice({
  name: '990-ez',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 990-ezSlice.actions;
export default 990-ezSlice.reducer;

// Selectors
export const select990-EZValues = (state: any) => state.990-ez.values;
export const select990-EZErrors = (state: any) => state.990-ez.errors;
export const select990-EZIsComplete = (state: any) => state.990-ez.isComplete;
export const select990-EZCalculatedLines = (state: any) => state.990-ez.calculatedLines;
