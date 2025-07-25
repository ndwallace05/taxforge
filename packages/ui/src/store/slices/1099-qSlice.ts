import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1099-QState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1099-QState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1099-qSlice = createSlice({
  name: '1099-q',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099-qSlice.actions;
export default 1099-qSlice.reducer;

// Selectors
export const select1099-QValues = (state: any) => state.1099-q.values;
export const select1099-QErrors = (state: any) => state.1099-q.errors;
export const select1099-QIsComplete = (state: any) => state.1099-q.isComplete;
export const select1099-QCalculatedLines = (state: any) => state.1099-q.calculatedLines;
