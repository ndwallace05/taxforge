import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8862State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8862State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8862Slice = createSlice({
  name: '8862',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8862Slice.actions;
export default 8862Slice.reducer;

// Selectors
export const select8862Values = (state: any) => state.8862.values;
export const select8862Errors = (state: any) => state.8862.errors;
export const select8862IsComplete = (state: any) => state.8862.isComplete;
export const select8862CalculatedLines = (state: any) => state.8862.calculatedLines;
