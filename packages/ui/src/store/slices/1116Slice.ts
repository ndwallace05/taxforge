import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1116State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1116State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1116Slice = createSlice({
  name: '1116',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1116Slice.actions;
export default 1116Slice.reducer;

// Selectors
export const select1116Values = (state: any) => state.1116.values;
export const select1116Errors = (state: any) => state.1116.errors;
export const select1116IsComplete = (state: any) => state.1116.isComplete;
export const select1116CalculatedLines = (state: any) => state.1116.calculatedLines;
