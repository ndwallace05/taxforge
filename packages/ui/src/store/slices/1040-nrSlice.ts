import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1040-NRState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1040-NRState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1040-nrSlice = createSlice({
  name: '1040-nr',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1040-nrSlice.actions;
export default 1040-nrSlice.reducer;

// Selectors
export const select1040-NRValues = (state: any) => state.1040-nr.values;
export const select1040-NRErrors = (state: any) => state.1040-nr.errors;
export const select1040-NRIsComplete = (state: any) => state.1040-nr.isComplete;
export const select1040-NRCalculatedLines = (state: any) => state.1040-nr.calculatedLines;
