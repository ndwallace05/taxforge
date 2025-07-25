import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8621State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8621State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8621Slice = createSlice({
  name: '8621',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8621Slice.actions;
export default 8621Slice.reducer;

// Selectors
export const select8621Values = (state: any) => state.8621.values;
export const select8621Errors = (state: any) => state.8621.errors;
export const select8621IsComplete = (state: any) => state.8621.isComplete;
export const select8621CalculatedLines = (state: any) => state.8621.calculatedLines;
