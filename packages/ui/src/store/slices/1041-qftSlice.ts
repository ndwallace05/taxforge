import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1041-QFTState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1041-QFTState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1041-qftSlice = createSlice({
  name: '1041-qft',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1041-qftSlice.actions;
export default 1041-qftSlice.reducer;

// Selectors
export const select1041-QFTValues = (state: any) => state.1041-qft.values;
export const select1041-QFTErrors = (state: any) => state.1041-qft.errors;
export const select1041-QFTIsComplete = (state: any) => state.1041-qft.isComplete;
export const select1041-QFTCalculatedLines = (state: any) => state.1041-qft.calculatedLines;
