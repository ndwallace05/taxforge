import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1099-BState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1099-BState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1099-bSlice = createSlice({
  name: '1099-b',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099-bSlice.actions;
export default 1099-bSlice.reducer;

// Selectors
export const select1099-BValues = (state: any) => state.1099-b.values;
export const select1099-BErrors = (state: any) => state.1099-b.errors;
export const select1099-BIsComplete = (state: any) => state.1099-b.isComplete;
export const select1099-BCalculatedLines = (state: any) => state.1099-b.calculatedLines;
