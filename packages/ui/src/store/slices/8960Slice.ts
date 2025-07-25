import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8960State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8960State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8960Slice = createSlice({
  name: '8960',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8960Slice.actions;
export default 8960Slice.reducer;

// Selectors
export const select8960Values = (state: any) => state.8960.values;
export const select8960Errors = (state: any) => state.8960.errors;
export const select8960IsComplete = (state: any) => state.8960.isComplete;
export const select8960CalculatedLines = (state: any) => state.8960.calculatedLines;
