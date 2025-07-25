import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5310State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5310State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5310Slice = createSlice({
  name: '5310',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5310Slice.actions;
export default 5310Slice.reducer;

// Selectors
export const select5310Values = (state: any) => state.5310.values;
export const select5310Errors = (state: any) => state.5310.errors;
export const select5310IsComplete = (state: any) => state.5310.isComplete;
export const select5310CalculatedLines = (state: any) => state.5310.calculatedLines;
