import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface W-2GState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: W-2GState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const w-2gSlice = createSlice({
  name: 'w-2g',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = w-2gSlice.actions;
export default w-2gSlice.reducer;

// Selectors
export const selectW-2GValues = (state: any) => state.w-2g.values;
export const selectW-2GErrors = (state: any) => state.w-2g.errors;
export const selectW-2GIsComplete = (state: any) => state.w-2g.isComplete;
export const selectW-2GCalculatedLines = (state: any) => state.w-2g.calculatedLines;
