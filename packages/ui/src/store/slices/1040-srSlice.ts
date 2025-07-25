import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1040-SRState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1040-SRState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1040-srSlice = createSlice({
  name: '1040-sr',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1040-srSlice.actions;
export default 1040-srSlice.reducer;

// Selectors
export const select1040-SRValues = (state: any) => state.1040-sr.values;
export const select1040-SRErrors = (state: any) => state.1040-sr.errors;
export const select1040-SRIsComplete = (state: any) => state.1040-sr.isComplete;
export const select1040-SRCalculatedLines = (state: any) => state.1040-sr.calculatedLines;
