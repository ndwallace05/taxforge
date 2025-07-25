import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 970State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 970State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 970Slice = createSlice({
  name: '970',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 970Slice.actions;
export default 970Slice.reducer;

// Selectors
export const select970Values = (state: any) => state.970.values;
export const select970Errors = (state: any) => state.970.errors;
export const select970IsComplete = (state: any) => state.970.isComplete;
export const select970CalculatedLines = (state: any) => state.970.calculatedLines;
