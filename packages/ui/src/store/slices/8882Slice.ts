import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8882State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8882State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8882Slice = createSlice({
  name: '8882',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8882Slice.actions;
export default 8882Slice.reducer;

// Selectors
export const select8882Values = (state: any) => state.8882.values;
export const select8882Errors = (state: any) => state.8882.errors;
export const select8882IsComplete = (state: any) => state.8882.isComplete;
export const select8882CalculatedLines = (state: any) => state.8882.calculatedLines;
