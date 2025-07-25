import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1120-WState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1120-WState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1120-wSlice = createSlice({
  name: '1120-w',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120-wSlice.actions;
export default 1120-wSlice.reducer;

// Selectors
export const select1120-WValues = (state: any) => state.1120-w.values;
export const select1120-WErrors = (state: any) => state.1120-w.errors;
export const select1120-WIsComplete = (state: any) => state.1120-w.isComplete;
export const select1120-WCalculatedLines = (state: any) => state.1120-w.calculatedLines;
