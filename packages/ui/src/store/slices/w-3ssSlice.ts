import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface W-3SSState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: W-3SSState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const w-3ssSlice = createSlice({
  name: 'w-3ss',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = w-3ssSlice.actions;
export default w-3ssSlice.reducer;

// Selectors
export const selectW-3SSValues = (state: any) => state.w-3ss.values;
export const selectW-3SSErrors = (state: any) => state.w-3ss.errors;
export const selectW-3SSIsComplete = (state: any) => state.w-3ss.isComplete;
export const selectW-3SSCalculatedLines = (state: any) => state.w-3ss.calculatedLines;
