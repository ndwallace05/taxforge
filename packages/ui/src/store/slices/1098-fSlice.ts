import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1098-FState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1098-FState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1098-fSlice = createSlice({
  name: '1098-f',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1098-fSlice.actions;
export default 1098-fSlice.reducer;

// Selectors
export const select1098-FValues = (state: any) => state.1098-f.values;
export const select1098-FErrors = (state: any) => state.1098-f.errors;
export const select1098-FIsComplete = (state: any) => state.1098-f.isComplete;
export const select1098-FCalculatedLines = (state: any) => state.1098-f.calculatedLines;
