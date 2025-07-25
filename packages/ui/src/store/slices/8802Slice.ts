import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8802State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8802State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8802Slice = createSlice({
  name: '8802',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8802Slice.actions;
export default 8802Slice.reducer;

// Selectors
export const select8802Values = (state: any) => state.8802.values;
export const select8802Errors = (state: any) => state.8802.errors;
export const select8802IsComplete = (state: any) => state.8802.isComplete;
export const select8802CalculatedLines = (state: any) => state.8802.calculatedLines;
