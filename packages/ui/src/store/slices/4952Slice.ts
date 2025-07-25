import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 4952State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 4952State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 4952Slice = createSlice({
  name: '4952',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4952Slice.actions;
export default 4952Slice.reducer;

// Selectors
export const select4952Values = (state: any) => state.4952.values;
export const select4952Errors = (state: any) => state.4952.errors;
export const select4952IsComplete = (state: any) => state.4952.isComplete;
export const select4952CalculatedLines = (state: any) => state.4952.calculatedLines;
