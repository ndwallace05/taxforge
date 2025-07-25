import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1120-SFState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1120-SFState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1120-sfSlice = createSlice({
  name: '1120-sf',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120-sfSlice.actions;
export default 1120-sfSlice.reducer;

// Selectors
export const select1120-SFValues = (state: any) => state.1120-sf.values;
export const select1120-SFErrors = (state: any) => state.1120-sf.errors;
export const select1120-SFIsComplete = (state: any) => state.1120-sf.isComplete;
export const select1120-SFCalculatedLines = (state: any) => state.1120-sf.calculatedLines;
