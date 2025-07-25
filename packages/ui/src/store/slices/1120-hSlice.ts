import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1120-HState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1120-HState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1120-hSlice = createSlice({
  name: '1120-h',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120-hSlice.actions;
export default 1120-hSlice.reducer;

// Selectors
export const select1120-HValues = (state: any) => state.1120-h.values;
export const select1120-HErrors = (state: any) => state.1120-h.errors;
export const select1120-HIsComplete = (state: any) => state.1120-h.isComplete;
export const select1120-HCalculatedLines = (state: any) => state.1120-h.calculatedLines;
