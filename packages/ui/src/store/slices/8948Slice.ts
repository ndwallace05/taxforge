import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8948State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8948State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8948Slice = createSlice({
  name: '8948',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8948Slice.actions;
export default 8948Slice.reducer;

// Selectors
export const select8948Values = (state: any) => state.8948.values;
export const select8948Errors = (state: any) => state.8948.errors;
export const select8948IsComplete = (state: any) => state.8948.isComplete;
export const select8948CalculatedLines = (state: any) => state.8948.calculatedLines;
