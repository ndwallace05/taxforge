import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8879-EOState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8879-EOState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8879-eoSlice = createSlice({
  name: '8879-eo',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8879-eoSlice.actions;
export default 8879-eoSlice.reducer;

// Selectors
export const select8879-EOValues = (state: any) => state.8879-eo.values;
export const select8879-EOErrors = (state: any) => state.8879-eo.errors;
export const select8879-EOIsComplete = (state: any) => state.8879-eo.isComplete;
export const select8879-EOCalculatedLines = (state: any) => state.8879-eo.calculatedLines;
