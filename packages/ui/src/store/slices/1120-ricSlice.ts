import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1120-RICState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1120-RICState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1120-ricSlice = createSlice({
  name: '1120-ric',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120-ricSlice.actions;
export default 1120-ricSlice.reducer;

// Selectors
export const select1120-RICValues = (state: any) => state.1120-ric.values;
export const select1120-RICErrors = (state: any) => state.1120-ric.errors;
export const select1120-RICIsComplete = (state: any) => state.1120-ric.isComplete;
export const select1120-RICCalculatedLines = (state: any) => state.1120-ric.calculatedLines;
