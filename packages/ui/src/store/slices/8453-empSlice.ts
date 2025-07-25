import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8453-EMPState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8453-EMPState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8453-empSlice = createSlice({
  name: '8453-emp',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8453-empSlice.actions;
export default 8453-empSlice.reducer;

// Selectors
export const select8453-EMPValues = (state: any) => state.8453-emp.values;
export const select8453-EMPErrors = (state: any) => state.8453-emp.errors;
export const select8453-EMPIsComplete = (state: any) => state.8453-emp.isComplete;
export const select8453-EMPCalculatedLines = (state: any) => state.8453-emp.calculatedLines;
