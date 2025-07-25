import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 943-XState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 943-XState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 943-xSlice = createSlice({
  name: '943-x',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 943-xSlice.actions;
export default 943-xSlice.reducer;

// Selectors
export const select943-XValues = (state: any) => state.943-x.values;
export const select943-XErrors = (state: any) => state.943-x.errors;
export const select943-XIsComplete = (state: any) => state.943-x.isComplete;
export const select943-XCalculatedLines = (state: any) => state.943-x.calculatedLines;
