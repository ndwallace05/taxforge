import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1099-INTState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1099-INTState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1099-intSlice = createSlice({
  name: '1099-int',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099-intSlice.actions;
export default 1099-intSlice.reducer;

// Selectors
export const select1099-INTValues = (state: any) => state.1099-int.values;
export const select1099-INTErrors = (state: any) => state.1099-int.errors;
export const select1099-INTIsComplete = (state: any) => state.1099-int.isComplete;
export const select1099-INTCalculatedLines = (state: any) => state.1099-int.calculatedLines;
