import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 2555State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 2555State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 2555Slice = createSlice({
  name: '2555',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2555Slice.actions;
export default 2555Slice.reducer;

// Selectors
export const select2555Values = (state: any) => state.2555.values;
export const select2555Errors = (state: any) => state.2555.errors;
export const select2555IsComplete = (state: any) => state.2555.isComplete;
export const select2555CalculatedLines = (state: any) => state.2555.calculatedLines;
