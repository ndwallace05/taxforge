import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1099-DIVState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1099-DIVState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1099-divSlice = createSlice({
  name: '1099-div',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099-divSlice.actions;
export default 1099-divSlice.reducer;

// Selectors
export const select1099-DIVValues = (state: any) => state.1099-div.values;
export const select1099-DIVErrors = (state: any) => state.1099-div.errors;
export const select1099-DIVIsComplete = (state: any) => state.1099-div.isComplete;
export const select1099-DIVCalculatedLines = (state: any) => state.1099-div.calculatedLines;
