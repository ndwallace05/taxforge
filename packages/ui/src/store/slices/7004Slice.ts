import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 7004State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 7004State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 7004Slice = createSlice({
  name: '7004',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 7004Slice.actions;
export default 7004Slice.reducer;

// Selectors
export const select7004Values = (state: any) => state.7004.values;
export const select7004Errors = (state: any) => state.7004.errors;
export const select7004IsComplete = (state: any) => state.7004.isComplete;
export const select7004CalculatedLines = (state: any) => state.7004.calculatedLines;
