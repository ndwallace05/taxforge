import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8863State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8863State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8863Slice = createSlice({
  name: '8863',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8863Slice.actions;
export default 8863Slice.reducer;

// Selectors
export const select8863Values = (state: any) => state.8863.values;
export const select8863Errors = (state: any) => state.8863.errors;
export const select8863IsComplete = (state: any) => state.8863.isComplete;
export const select8863CalculatedLines = (state: any) => state.8863.calculatedLines;
