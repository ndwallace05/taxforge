import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1098-TState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1098-TState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1098-tSlice = createSlice({
  name: '1098-t',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1098-tSlice.actions;
export default 1098-tSlice.reducer;

// Selectors
export const select1098-TValues = (state: any) => state.1098-t.values;
export const select1098-TErrors = (state: any) => state.1098-t.errors;
export const select1098-TIsComplete = (state: any) => state.1098-t.isComplete;
export const select1098-TCalculatedLines = (state: any) => state.1098-t.calculatedLines;
