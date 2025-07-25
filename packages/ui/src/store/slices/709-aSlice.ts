import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 709-AState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 709-AState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 709-aSlice = createSlice({
  name: '709-a',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 709-aSlice.actions;
export default 709-aSlice.reducer;

// Selectors
export const select709-AValues = (state: any) => state.709-a.values;
export const select709-AErrors = (state: any) => state.709-a.errors;
export const select709-AIsComplete = (state: any) => state.709-a.isComplete;
export const select709-ACalculatedLines = (state: any) => state.709-a.calculatedLines;
