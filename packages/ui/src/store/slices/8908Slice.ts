import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8908State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8908State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8908Slice = createSlice({
  name: '8908',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8908Slice.actions;
export default 8908Slice.reducer;

// Selectors
export const select8908Values = (state: any) => state.8908.values;
export const select8908Errors = (state: any) => state.8908.errors;
export const select8908IsComplete = (state: any) => state.8908.isComplete;
export const select8908CalculatedLines = (state: any) => state.8908.calculatedLines;
