import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8881State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8881State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8881Slice = createSlice({
  name: '8881',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8881Slice.actions;
export default 8881Slice.reducer;

// Selectors
export const select8881Values = (state: any) => state.8881.values;
export const select8881Errors = (state: any) => state.8881.errors;
export const select8881IsComplete = (state: any) => state.8881.isComplete;
export const select8881CalculatedLines = (state: any) => state.8881.calculatedLines;
