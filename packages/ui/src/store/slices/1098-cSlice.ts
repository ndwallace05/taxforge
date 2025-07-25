import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1098-CState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1098-CState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1098-cSlice = createSlice({
  name: '1098-c',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1098-cSlice.actions;
export default 1098-cSlice.reducer;

// Selectors
export const select1098-CValues = (state: any) => state.1098-c.values;
export const select1098-CErrors = (state: any) => state.1098-c.errors;
export const select1098-CIsComplete = (state: any) => state.1098-c.isComplete;
export const select1098-CCalculatedLines = (state: any) => state.1098-c.calculatedLines;
