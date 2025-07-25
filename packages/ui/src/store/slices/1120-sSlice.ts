import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1120-SState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1120-SState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1120-sSlice = createSlice({
  name: '1120-s',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120-sSlice.actions;
export default 1120-sSlice.reducer;

// Selectors
export const select1120-SValues = (state: any) => state.1120-s.values;
export const select1120-SErrors = (state: any) => state.1120-s.errors;
export const select1120-SIsComplete = (state: any) => state.1120-s.isComplete;
export const select1120-SCalculatedLines = (state: any) => state.1120-s.calculatedLines;
