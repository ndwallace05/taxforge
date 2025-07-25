import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface W-4PState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: W-4PState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const w-4pSlice = createSlice({
  name: 'w-4p',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = w-4pSlice.actions;
export default w-4pSlice.reducer;

// Selectors
export const selectW-4PValues = (state: any) => state.w-4p.values;
export const selectW-4PErrors = (state: any) => state.w-4p.errors;
export const selectW-4PIsComplete = (state: any) => state.w-4p.isComplete;
export const selectW-4PCalculatedLines = (state: any) => state.w-4p.calculatedLines;
