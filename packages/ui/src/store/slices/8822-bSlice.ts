import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8822-BState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8822-BState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8822-bSlice = createSlice({
  name: '8822-b',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8822-bSlice.actions;
export default 8822-bSlice.reducer;

// Selectors
export const select8822-BValues = (state: any) => state.8822-b.values;
export const select8822-BErrors = (state: any) => state.8822-b.errors;
export const select8822-BIsComplete = (state: any) => state.8822-b.isComplete;
export const select8822-BCalculatedLines = (state: any) => state.8822-b.calculatedLines;
