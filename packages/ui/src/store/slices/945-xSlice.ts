import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 945-XState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 945-XState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 945-xSlice = createSlice({
  name: '945-x',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 945-xSlice.actions;
export default 945-xSlice.reducer;

// Selectors
export const select945-XValues = (state: any) => state.945-x.values;
export const select945-XErrors = (state: any) => state.945-x.errors;
export const select945-XIsComplete = (state: any) => state.945-x.isComplete;
export const select945-XCalculatedLines = (state: any) => state.945-x.calculatedLines;
