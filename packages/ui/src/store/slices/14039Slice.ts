import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 14039State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 14039State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 14039Slice = createSlice({
  name: '14039',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 14039Slice.actions;
export default 14039Slice.reducer;

// Selectors
export const select14039Values = (state: any) => state.14039.values;
export const select14039Errors = (state: any) => state.14039.errors;
export const select14039IsComplete = (state: any) => state.14039.isComplete;
export const select14039CalculatedLines = (state: any) => state.14039.calculatedLines;
