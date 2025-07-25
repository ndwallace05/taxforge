import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1098-EState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1098-EState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1098-eSlice = createSlice({
  name: '1098-e',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1098-eSlice.actions;
export default 1098-eSlice.reducer;

// Selectors
export const select1098-EValues = (state: any) => state.1098-e.values;
export const select1098-EErrors = (state: any) => state.1098-e.errors;
export const select1098-EIsComplete = (state: any) => state.1098-e.isComplete;
export const select1098-ECalculatedLines = (state: any) => state.1098-e.calculatedLines;
