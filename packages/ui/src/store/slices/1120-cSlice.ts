import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1120-CState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1120-CState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1120-cSlice = createSlice({
  name: '1120-c',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120-cSlice.actions;
export default 1120-cSlice.reducer;

// Selectors
export const select1120-CValues = (state: any) => state.1120-c.values;
export const select1120-CErrors = (state: any) => state.1120-c.errors;
export const select1120-CIsComplete = (state: any) => state.1120-c.isComplete;
export const select1120-CCalculatedLines = (state: any) => state.1120-c.calculatedLines;
