import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8971State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8971State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8971Slice = createSlice({
  name: '8971',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8971Slice.actions;
export default 8971Slice.reducer;

// Selectors
export const select8971Values = (state: any) => state.8971.values;
export const select8971Errors = (state: any) => state.8971.errors;
export const select8971IsComplete = (state: any) => state.8971.isComplete;
export const select8971CalculatedLines = (state: any) => state.8971.calculatedLines;
