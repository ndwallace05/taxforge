import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 4136State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 4136State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 4136Slice = createSlice({
  name: '4136',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4136Slice.actions;
export default 4136Slice.reducer;

// Selectors
export const select4136Values = (state: any) => state.4136.values;
export const select4136Errors = (state: any) => state.4136.errors;
export const select4136IsComplete = (state: any) => state.4136.isComplete;
export const select4136CalculatedLines = (state: any) => state.4136.calculatedLines;
