import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 944State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 944State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 944Slice = createSlice({
  name: '944',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 944Slice.actions;
export default 944Slice.reducer;

// Selectors
export const select944Values = (state: any) => state.944.values;
export const select944Errors = (state: any) => state.944.errors;
export const select944IsComplete = (state: any) => state.944.isComplete;
export const select944CalculatedLines = (state: any) => state.944.calculatedLines;
