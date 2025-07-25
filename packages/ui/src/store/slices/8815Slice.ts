import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 8815State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 8815State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 8815Slice = createSlice({
  name: '8815',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8815Slice.actions;
export default 8815Slice.reducer;

// Selectors
export const select8815Values = (state: any) => state.8815.values;
export const select8815Errors = (state: any) => state.8815.errors;
export const select8815IsComplete = (state: any) => state.8815.isComplete;
export const select8815CalculatedLines = (state: any) => state.8815.calculatedLines;
