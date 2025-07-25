import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8936State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8936State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8936Slice = createSlice({
  name: '8936',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8936Slice.actions;
export default 8936Slice.reducer;

// Selectors
export const select8936Values = (state: any) => state.8936.values;
export const select8936Errors = (state: any) => state.8936.errors;
export const select8936IsComplete = (state: any) => state.8936.isComplete;
export const select8936CalculatedLines = (state: any) => state.8936.calculatedLines;
