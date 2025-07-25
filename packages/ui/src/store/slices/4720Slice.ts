import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 4720State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 4720State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 4720Slice = createSlice({
  name: '4720',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4720Slice.actions;
export default 4720Slice.reducer;

// Selectors
export const select4720Values = (state: any) => state.4720.values;
export const select4720Errors = (state: any) => state.4720.errors;
export const select4720IsComplete = (state: any) => state.4720.isComplete;
export const select4720CalculatedLines = (state: any) => state.4720.calculatedLines;
