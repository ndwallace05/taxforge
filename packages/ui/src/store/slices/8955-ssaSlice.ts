import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8955-SSAState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8955-SSAState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8955-ssaSlice = createSlice({
  name: '8955-ssa',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8955-ssaSlice.actions;
export default 8955-ssaSlice.reducer;

// Selectors
export const select8955-SSAValues = (state: any) => state.8955-ssa.values;
export const select8955-SSAErrors = (state: any) => state.8955-ssa.errors;
export const select8955-SSAIsComplete = (state: any) => state.8955-ssa.isComplete;
export const select8955-SSACalculatedLines = (state: any) => state.8955-ssa.calculatedLines;
