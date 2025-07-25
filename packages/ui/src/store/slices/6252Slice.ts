import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 6252State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 6252State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 6252Slice = createSlice({
  name: '6252',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 6252Slice.actions;
export default 6252Slice.reducer;

// Selectors
export const select6252Values = (state: any) => state.6252.values;
export const select6252Errors = (state: any) => state.6252.errors;
export const select6252IsComplete = (state: any) => state.6252.isComplete;
export const select6252CalculatedLines = (state: any) => state.6252.calculatedLines;
