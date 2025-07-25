import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1040-XState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1040-XState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1040-xSlice = createSlice({
  name: '1040-x',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1040-xSlice.actions;
export default 1040-xSlice.reducer;

// Selectors
export const select1040-XValues = (state: any) => state.1040-x.values;
export const select1040-XErrors = (state: any) => state.1040-x.errors;
export const select1040-XIsComplete = (state: any) => state.1040-x.isComplete;
export const select1040-XCalculatedLines = (state: any) => state.1040-x.calculatedLines;
