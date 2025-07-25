import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 706-AState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 706-AState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 706-aSlice = createSlice({
  name: '706-a',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 706-aSlice.actions;
export default 706-aSlice.reducer;

// Selectors
export const select706-AValues = (state: any) => state.706-a.values;
export const select706-AErrors = (state: any) => state.706-a.errors;
export const select706-AIsComplete = (state: any) => state.706-a.isComplete;
export const select706-ACalculatedLines = (state: any) => state.706-a.calculatedLines;
