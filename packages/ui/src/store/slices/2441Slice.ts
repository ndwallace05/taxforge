import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 2441State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 2441State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 2441Slice = createSlice({
  name: '2441',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2441Slice.actions;
export default 2441Slice.reducer;

// Selectors
export const select2441Values = (state: any) => state.2441.values;
export const select2441Errors = (state: any) => state.2441.errors;
export const select2441IsComplete = (state: any) => state.2441.isComplete;
export const select2441CalculatedLines = (state: any) => state.2441.calculatedLines;
