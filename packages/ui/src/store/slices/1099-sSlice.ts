import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1099-SState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1099-SState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1099-sSlice = createSlice({
  name: '1099-s',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099-sSlice.actions;
export default 1099-sSlice.reducer;

// Selectors
export const select1099-SValues = (state: any) => state.1099-s.values;
export const select1099-SErrors = (state: any) => state.1099-s.errors;
export const select1099-SIsComplete = (state: any) => state.1099-s.isComplete;
export const select1099-SCalculatedLines = (state: any) => state.1099-s.calculatedLines;
