import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5695State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5695State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5695Slice = createSlice({
  name: '5695',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5695Slice.actions;
export default 5695Slice.reducer;

// Selectors
export const select5695Values = (state: any) => state.5695.values;
export const select5695Errors = (state: any) => state.5695.errors;
export const select5695IsComplete = (state: any) => state.5695.isComplete;
export const select5695CalculatedLines = (state: any) => state.5695.calculatedLines;
