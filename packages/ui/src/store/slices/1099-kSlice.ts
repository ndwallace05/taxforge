import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1099-KState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1099-KState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1099-kSlice = createSlice({
  name: '1099-k',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099-kSlice.actions;
export default 1099-kSlice.reducer;

// Selectors
export const select1099-KValues = (state: any) => state.1099-k.values;
export const select1099-KErrors = (state: any) => state.1099-k.errors;
export const select1099-KIsComplete = (state: any) => state.1099-k.isComplete;
export const select1099-KCalculatedLines = (state: any) => state.1099-k.calculatedLines;
