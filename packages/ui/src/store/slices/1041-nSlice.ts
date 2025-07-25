import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1041-NState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1041-NState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1041-nSlice = createSlice({
  name: '1041-n',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1041-nSlice.actions;
export default 1041-nSlice.reducer;

// Selectors
export const select1041-NValues = (state: any) => state.1041-n.values;
export const select1041-NErrors = (state: any) => state.1041-n.errors;
export const select1041-NIsComplete = (state: any) => state.1041-n.isComplete;
export const select1041-NCalculatedLines = (state: any) => state.1041-n.calculatedLines;
