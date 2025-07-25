import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8873State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8873State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8873Slice = createSlice({
  name: '8873',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8873Slice.actions;
export default 8873Slice.reducer;

// Selectors
export const select8873Values = (state: any) => state.8873.values;
export const select8873Errors = (state: any) => state.8873.errors;
export const select8873IsComplete = (state: any) => state.8873.isComplete;
export const select8873CalculatedLines = (state: any) => state.8873.calculatedLines;
