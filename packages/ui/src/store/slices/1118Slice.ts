import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1118State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1118State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1118Slice = createSlice({
  name: '1118',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1118Slice.actions;
export default 1118Slice.reducer;

// Selectors
export const select1118Values = (state: any) => state.1118.values;
export const select1118Errors = (state: any) => state.1118.errors;
export const select1118IsComplete = (state: any) => state.1118.isComplete;
export const select1118CalculatedLines = (state: any) => state.1118.calculatedLines;
