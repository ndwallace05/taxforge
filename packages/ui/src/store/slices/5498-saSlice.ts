import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5498-SAState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5498-SAState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5498-saSlice = createSlice({
  name: '5498-sa',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5498-saSlice.actions;
export default 5498-saSlice.reducer;

// Selectors
export const select5498-SAValues = (state: any) => state.5498-sa.values;
export const select5498-SAErrors = (state: any) => state.5498-sa.errors;
export const select5498-SAIsComplete = (state: any) => state.5498-sa.isComplete;
export const select5498-SACalculatedLines = (state: any) => state.5498-sa.calculatedLines;
