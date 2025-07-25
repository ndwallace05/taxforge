import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 9465State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 9465State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 9465Slice = createSlice({
  name: '9465',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 9465Slice.actions;
export default 9465Slice.reducer;

// Selectors
export const select9465Values = (state: any) => state.9465.values;
export const select9465Errors = (state: any) => state.9465.errors;
export const select9465IsComplete = (state: any) => state.9465.isComplete;
export const select9465CalculatedLines = (state: any) => state.9465.calculatedLines;
