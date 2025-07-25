import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 6069State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 6069State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 6069Slice = createSlice({
  name: '6069',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 6069Slice.actions;
export default 6069Slice.reducer;

// Selectors
export const select6069Values = (state: any) => state.6069.values;
export const select6069Errors = (state: any) => state.6069.errors;
export const select6069IsComplete = (state: any) => state.6069.isComplete;
export const select6069CalculatedLines = (state: any) => state.6069.calculatedLines;
