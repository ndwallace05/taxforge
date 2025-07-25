import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8941State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8941State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8941Slice = createSlice({
  name: '8941',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8941Slice.actions;
export default 8941Slice.reducer;

// Selectors
export const select8941Values = (state: any) => state.8941.values;
export const select8941Errors = (state: any) => state.8941.errors;
export const select8941IsComplete = (state: any) => state.8941.isComplete;
export const select8941CalculatedLines = (state: any) => state.8941.calculatedLines;
