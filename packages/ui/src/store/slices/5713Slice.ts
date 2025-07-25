import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5713State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5713State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5713Slice = createSlice({
  name: '5713',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5713Slice.actions;
export default 5713Slice.reducer;

// Selectors
export const select5713Values = (state: any) => state.5713.values;
export const select5713Errors = (state: any) => state.5713.errors;
export const select5713IsComplete = (state: any) => state.5713.isComplete;
export const select5713CalculatedLines = (state: any) => state.5713.calculatedLines;
