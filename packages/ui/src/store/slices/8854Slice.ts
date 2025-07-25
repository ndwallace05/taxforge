import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8854State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8854State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8854Slice = createSlice({
  name: '8854',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8854Slice.actions;
export default 8854Slice.reducer;

// Selectors
export const select8854Values = (state: any) => state.8854.values;
export const select8854Errors = (state: any) => state.8854.errors;
export const select8854IsComplete = (state: any) => state.8854.isComplete;
export const select8854CalculatedLines = (state: any) => state.8854.calculatedLines;
