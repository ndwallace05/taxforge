import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 706-NAState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 706-NAState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 706-naSlice = createSlice({
  name: '706-na',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 706-naSlice.actions;
export default 706-naSlice.reducer;

// Selectors
export const select706-NAValues = (state: any) => state.706-na.values;
export const select706-NAErrors = (state: any) => state.706-na.errors;
export const select706-NAIsComplete = (state: any) => state.706-na.isComplete;
export const select706-NACalculatedLines = (state: any) => state.706-na.calculatedLines;
