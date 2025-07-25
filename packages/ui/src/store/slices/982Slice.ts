import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 982State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 982State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 982Slice = createSlice({
  name: '982',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 982Slice.actions;
export default 982Slice.reducer;

// Selectors
export const select982Values = (state: any) => state.982.values;
export const select982Errors = (state: any) => state.982.errors;
export const select982IsComplete = (state: any) => state.982.isComplete;
export const select982CalculatedLines = (state: any) => state.982.calculatedLines;
