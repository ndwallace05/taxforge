import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8833State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8833State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8833Slice = createSlice({
  name: '8833',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8833Slice.actions;
export default 8833Slice.reducer;

// Selectors
export const select8833Values = (state: any) => state.8833.values;
export const select8833Errors = (state: any) => state.8833.errors;
export const select8833IsComplete = (state: any) => state.8833.isComplete;
export const select8833CalculatedLines = (state: any) => state.8833.calculatedLines;
