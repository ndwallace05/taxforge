import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface W-4SState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: W-4SState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const w-4sSlice = createSlice({
  name: 'w-4s',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = w-4sSlice.actions;
export default w-4sSlice.reducer;

// Selectors
export const selectW-4SValues = (state: any) => state.w-4s.values;
export const selectW-4SErrors = (state: any) => state.w-4s.errors;
export const selectW-4SIsComplete = (state: any) => state.w-4s.isComplete;
export const selectW-4SCalculatedLines = (state: any) => state.w-4s.calculatedLines;
