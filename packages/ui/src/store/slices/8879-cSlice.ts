import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8879-CState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8879-CState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8879-cSlice = createSlice({
  name: '8879-c',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8879-cSlice.actions;
export default 8879-cSlice.reducer;

// Selectors
export const select8879-CValues = (state: any) => state.8879-c.values;
export const select8879-CErrors = (state: any) => state.8879-c.errors;
export const select8879-CIsComplete = (state: any) => state.8879-c.isComplete;
export const select8879-CCalculatedLines = (state: any) => state.8879-c.calculatedLines;
