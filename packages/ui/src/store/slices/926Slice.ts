import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 926State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 926State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 926Slice = createSlice({
  name: '926',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 926Slice.actions;
export default 926Slice.reducer;

// Selectors
export const select926Values = (state: any) => state.926.values;
export const select926Errors = (state: any) => state.926.errors;
export const select926IsComplete = (state: any) => state.926.isComplete;
export const select926CalculatedLines = (state: any) => state.926.calculatedLines;
