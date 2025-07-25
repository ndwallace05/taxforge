import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8949State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8949State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8949Slice = createSlice({
  name: '8949',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8949Slice.actions;
export default 8949Slice.reducer;

// Selectors
export const select8949Values = (state: any) => state.8949.values;
export const select8949Errors = (state: any) => state.8949.errors;
export const select8949IsComplete = (state: any) => state.8949.isComplete;
export const select8949CalculatedLines = (state: any) => state.8949.calculatedLines;
