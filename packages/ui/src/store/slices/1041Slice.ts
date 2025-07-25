import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1041State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1041State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1041Slice = createSlice({
  name: '1041',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1041Slice.actions;
export default 1041Slice.reducer;

// Selectors
export const select1041Values = (state: any) => state.1041.values;
export const select1041Errors = (state: any) => state.1041.errors;
export const select1041IsComplete = (state: any) => state.1041.isComplete;
export const select1041CalculatedLines = (state: any) => state.1041.calculatedLines;
