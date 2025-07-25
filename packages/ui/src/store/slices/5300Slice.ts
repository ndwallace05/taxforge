import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5300State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5300State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5300Slice = createSlice({
  name: '5300',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5300Slice.actions;
export default 5300Slice.reducer;

// Selectors
export const select5300Values = (state: any) => state.5300.values;
export const select5300Errors = (state: any) => state.5300.errors;
export const select5300IsComplete = (state: any) => state.5300.isComplete;
export const select5300CalculatedLines = (state: any) => state.5300.calculatedLines;
