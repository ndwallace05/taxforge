import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1099-RState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1099-RState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1099-rSlice = createSlice({
  name: '1099-r',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099-rSlice.actions;
export default 1099-rSlice.reducer;

// Selectors
export const select1099-RValues = (state: any) => state.1099-r.values;
export const select1099-RErrors = (state: any) => state.1099-r.errors;
export const select1099-RIsComplete = (state: any) => state.1099-r.isComplete;
export const select1099-RCalculatedLines = (state: any) => state.1099-r.calculatedLines;
