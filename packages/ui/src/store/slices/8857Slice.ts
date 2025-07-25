import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8857State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8857State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8857Slice = createSlice({
  name: '8857',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8857Slice.actions;
export default 8857Slice.reducer;

// Selectors
export const select8857Values = (state: any) => state.8857.values;
export const select8857Errors = (state: any) => state.8857.errors;
export const select8857IsComplete = (state: any) => state.8857.isComplete;
export const select8857CalculatedLines = (state: any) => state.8857.calculatedLines;
