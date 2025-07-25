import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1120-LState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1120-LState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1120-lSlice = createSlice({
  name: '1120-l',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120-lSlice.actions;
export default 1120-lSlice.reducer;

// Selectors
export const select1120-LValues = (state: any) => state.1120-l.values;
export const select1120-LErrors = (state: any) => state.1120-l.errors;
export const select1120-LIsComplete = (state: any) => state.1120-l.isComplete;
export const select1120-LCalculatedLines = (state: any) => state.1120-l.calculatedLines;
