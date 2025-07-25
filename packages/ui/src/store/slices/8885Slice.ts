import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8885State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8885State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8885Slice = createSlice({
  name: '8885',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8885Slice.actions;
export default 8885Slice.reducer;

// Selectors
export const select8885Values = (state: any) => state.8885.values;
export const select8885Errors = (state: any) => state.8885.errors;
export const select8885IsComplete = (state: any) => state.8885.isComplete;
export const select8885CalculatedLines = (state: any) => state.8885.calculatedLines;
