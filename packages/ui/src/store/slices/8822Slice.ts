import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8822State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8822State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8822Slice = createSlice({
  name: '8822',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8822Slice.actions;
export default 8822Slice.reducer;

// Selectors
export const select8822Values = (state: any) => state.8822.values;
export const select8822Errors = (state: any) => state.8822.errors;
export const select8822IsComplete = (state: any) => state.8822.isComplete;
export const select8822CalculatedLines = (state: any) => state.8822.calculatedLines;
