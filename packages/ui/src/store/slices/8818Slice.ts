import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8818State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8818State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8818Slice = createSlice({
  name: '8818',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8818Slice.actions;
export default 8818Slice.reducer;

// Selectors
export const select8818Values = (state: any) => state.8818.values;
export const select8818Errors = (state: any) => state.8818.errors;
export const select8818IsComplete = (state: any) => state.8818.isComplete;
export const select8818CalculatedLines = (state: any) => state.8818.calculatedLines;
