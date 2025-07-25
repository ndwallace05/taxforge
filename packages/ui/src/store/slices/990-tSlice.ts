import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 990-TState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 990-TState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 990-tSlice = createSlice({
  name: '990-t',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 990-tSlice.actions;
export default 990-tSlice.reducer;

// Selectors
export const select990-TValues = (state: any) => state.990-t.values;
export const select990-TErrors = (state: any) => state.990-t.errors;
export const select990-TIsComplete = (state: any) => state.990-t.isComplete;
export const select990-TCalculatedLines = (state: any) => state.990-t.calculatedLines;
