import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 990-PFState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 990-PFState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 990-pfSlice = createSlice({
  name: '990-pf',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 990-pfSlice.actions;
export default 990-pfSlice.reducer;

// Selectors
export const select990-PFValues = (state: any) => state.990-pf.values;
export const select990-PFErrors = (state: any) => state.990-pf.errors;
export const select990-PFIsComplete = (state: any) => state.990-pf.isComplete;
export const select990-PFCalculatedLines = (state: any) => state.990-pf.calculatedLines;
