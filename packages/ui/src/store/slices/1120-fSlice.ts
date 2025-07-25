import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 1120-FState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 1120-FState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 1120-fSlice = createSlice({
  name: '1120-f',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120-fSlice.actions;
export default 1120-fSlice.reducer;

// Selectors
export const select1120-FValues = (state: any) => state.1120-f.values;
export const select1120-FErrors = (state: any) => state.1120-f.errors;
export const select1120-FIsComplete = (state: any) => state.1120-f.isComplete;
export const select1120-FCalculatedLines = (state: any) => state.1120-f.calculatedLines;
