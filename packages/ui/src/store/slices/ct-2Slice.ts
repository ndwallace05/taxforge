import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CT-2State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: CT-2State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const ct-2Slice = createSlice({
  name: 'ct-2',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = ct-2Slice.actions;
export default ct-2Slice.reducer;

// Selectors
export const selectCT-2Values = (state: any) => state.ct-2.values;
export const selectCT-2Errors = (state: any) => state.ct-2.errors;
export const selectCT-2IsComplete = (state: any) => state.ct-2.isComplete;
export const selectCT-2CalculatedLines = (state: any) => state.ct-2.calculatedLines;
