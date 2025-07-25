import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8864State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8864State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8864Slice = createSlice({
  name: '8864',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8864Slice.actions;
export default 8864Slice.reducer;

// Selectors
export const select8864Values = (state: any) => state.8864.values;
export const select8864Errors = (state: any) => state.8864.errors;
export const select8864IsComplete = (state: any) => state.8864.isComplete;
export const select8864CalculatedLines = (state: any) => state.8864.calculatedLines;
