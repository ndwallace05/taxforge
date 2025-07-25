import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1040-VState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1040-VState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1040-vSlice = createSlice({
  name: '1040-v',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1040-vSlice.actions;
export default 1040-vSlice.reducer;

// Selectors
export const select1040-VValues = (state: any) => state.1040-v.values;
export const select1040-VErrors = (state: any) => state.1040-v.errors;
export const select1040-VIsComplete = (state: any) => state.1040-v.isComplete;
export const select1040-VCalculatedLines = (state: any) => state.1040-v.calculatedLines;
