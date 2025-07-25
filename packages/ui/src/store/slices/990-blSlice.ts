import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 990-BLState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 990-BLState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 990-blSlice = createSlice({
  name: '990-bl',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 990-blSlice.actions;
export default 990-blSlice.reducer;

// Selectors
export const select990-BLValues = (state: any) => state.990-bl.values;
export const select990-BLErrors = (state: any) => state.990-bl.errors;
export const select990-BLIsComplete = (state: any) => state.990-bl.isComplete;
export const select990-BLCalculatedLines = (state: any) => state.990-bl.calculatedLines;
