import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1099-NECState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1099-NECState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1099-necSlice = createSlice({
  name: '1099-nec',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099-necSlice.actions;
export default 1099-necSlice.reducer;

// Selectors
export const select1099-NECValues = (state: any) => state.1099-nec.values;
export const select1099-NECErrors = (state: any) => state.1099-nec.errors;
export const select1099-NECIsComplete = (state: any) => state.1099-nec.isComplete;
export const select1099-NECCalculatedLines = (state: any) => state.1099-nec.calculatedLines;
