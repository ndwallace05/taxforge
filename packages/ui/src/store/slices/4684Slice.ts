import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 4684State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 4684State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 4684Slice = createSlice({
  name: '4684',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4684Slice.actions;
export default 4684Slice.reducer;

// Selectors
export const select4684Values = (state: any) => state.4684.values;
export const select4684Errors = (state: any) => state.4684.errors;
export const select4684IsComplete = (state: any) => state.4684.isComplete;
export const select4684CalculatedLines = (state: any) => state.4684.calculatedLines;
