import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 6251State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 6251State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 6251Slice = createSlice({
  name: '6251',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 6251Slice.actions;
export default 6251Slice.reducer;

// Selectors
export const select6251Values = (state: any) => state.6251.values;
export const select6251Errors = (state: any) => state.6251.errors;
export const select6251IsComplete = (state: any) => state.6251.isComplete;
export const select6251CalculatedLines = (state: any) => state.6251.calculatedLines;
