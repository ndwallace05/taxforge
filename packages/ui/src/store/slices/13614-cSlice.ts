import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 13614-CState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 13614-CState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 13614-cSlice = createSlice({
  name: '13614-c',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 13614-cSlice.actions;
export default 13614-cSlice.reducer;

// Selectors
export const select13614-CValues = (state: any) => state.13614-c.values;
export const select13614-CErrors = (state: any) => state.13614-c.errors;
export const select13614-CIsComplete = (state: any) => state.13614-c.isComplete;
export const select13614-CCalculatedLines = (state: any) => state.13614-c.calculatedLines;
