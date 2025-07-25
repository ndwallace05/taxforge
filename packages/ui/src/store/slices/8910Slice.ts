import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8910State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8910State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8910Slice = createSlice({
  name: '8910',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8910Slice.actions;
export default 8910Slice.reducer;

// Selectors
export const select8910Values = (state: any) => state.8910.values;
export const select8910Errors = (state: any) => state.8910.errors;
export const select8910IsComplete = (state: any) => state.8910.isComplete;
export const select8910CalculatedLines = (state: any) => state.8910.calculatedLines;
