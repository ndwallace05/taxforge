import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 4797State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 4797State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 4797Slice = createSlice({
  name: '4797',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4797Slice.actions;
export default 4797Slice.reducer;

// Selectors
export const select4797Values = (state: any) => state.4797.values;
export const select4797Errors = (state: any) => state.4797.errors;
export const select4797IsComplete = (state: any) => state.4797.isComplete;
export const select4797CalculatedLines = (state: any) => state.4797.calculatedLines;
