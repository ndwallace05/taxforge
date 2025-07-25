import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8879State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8879State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8879Slice = createSlice({
  name: '8879',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8879Slice.actions;
export default 8879Slice.reducer;

// Selectors
export const select8879Values = (state: any) => state.8879.values;
export const select8879Errors = (state: any) => state.8879.errors;
export const select8879IsComplete = (state: any) => state.8879.isComplete;
export const select8879CalculatedLines = (state: any) => state.8879.calculatedLines;
