import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 941-XState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 941-XState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 941-xSlice = createSlice({
  name: '941-x',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 941-xSlice.actions;
export default 941-xSlice.reducer;

// Selectors
export const select941-XValues = (state: any) => state.941-x.values;
export const select941-XErrors = (state: any) => state.941-x.errors;
export const select941-XIsComplete = (state: any) => state.941-x.isComplete;
export const select941-XCalculatedLines = (state: any) => state.941-x.calculatedLines;
