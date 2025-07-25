import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1098-QState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1098-QState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1098-qSlice = createSlice({
  name: '1098-q',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1098-qSlice.actions;
export default 1098-qSlice.reducer;

// Selectors
export const select1098-QValues = (state: any) => state.1098-q.values;
export const select1098-QErrors = (state: any) => state.1098-q.errors;
export const select1098-QIsComplete = (state: any) => state.1098-q.isComplete;
export const select1098-QCalculatedLines = (state: any) => state.1098-q.calculatedLines;
