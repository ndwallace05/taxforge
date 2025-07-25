import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1099-GState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1099-GState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1099-gSlice = createSlice({
  name: '1099-g',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099-gSlice.actions;
export default 1099-gSlice.reducer;

// Selectors
export const select1099-GValues = (state: any) => state.1099-g.values;
export const select1099-GErrors = (state: any) => state.1099-g.errors;
export const select1099-GIsComplete = (state: any) => state.1099-g.isComplete;
export const select1099-GCalculatedLines = (state: any) => state.1099-g.calculatedLines;
