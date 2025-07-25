import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1041-ESState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1041-ESState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1041-esSlice = createSlice({
  name: '1041-es',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1041-esSlice.actions;
export default 1041-esSlice.reducer;

// Selectors
export const select1041-ESValues = (state: any) => state.1041-es.values;
export const select1041-ESErrors = (state: any) => state.1041-es.errors;
export const select1041-ESIsComplete = (state: any) => state.1041-es.isComplete;
export const select1041-ESCalculatedLines = (state: any) => state.1041-es.calculatedLines;
