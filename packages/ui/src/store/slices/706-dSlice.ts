import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 706-DState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 706-DState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 706-dSlice = createSlice({
  name: '706-d',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 706-dSlice.actions;
export default 706-dSlice.reducer;

// Selectors
export const select706-DValues = (state: any) => state.706-d.values;
export const select706-DErrors = (state: any) => state.706-d.errors;
export const select706-DIsComplete = (state: any) => state.706-d.isComplete;
export const select706-DCalculatedLines = (state: any) => state.706-d.calculatedLines;
