import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface W-4VState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: W-4VState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const w-4vSlice = createSlice({
  name: 'w-4v',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = w-4vSlice.actions;
export default w-4vSlice.reducer;

// Selectors
export const selectW-4VValues = (state: any) => state.w-4v.values;
export const selectW-4VErrors = (state: any) => state.w-4v.errors;
export const selectW-4VIsComplete = (state: any) => state.w-4v.isComplete;
export const selectW-4VCalculatedLines = (state: any) => state.w-4v.calculatedLines;
