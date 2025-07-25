import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1120-REITState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1120-REITState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1120-reitSlice = createSlice({
  name: '1120-reit',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120-reitSlice.actions;
export default 1120-reitSlice.reducer;

// Selectors
export const select1120-REITValues = (state: any) => state.1120-reit.values;
export const select1120-REITErrors = (state: any) => state.1120-reit.errors;
export const select1120-REITIsComplete = (state: any) => state.1120-reit.isComplete;
export const select1120-REITCalculatedLines = (state: any) => state.1120-reit.calculatedLines;
