import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 3520State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 3520State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 3520Slice = createSlice({
  name: '3520',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 3520Slice.actions;
export default 3520Slice.reducer;

// Selectors
export const select3520Values = (state: any) => state.3520.values;
export const select3520Errors = (state: any) => state.3520.errors;
export const select3520IsComplete = (state: any) => state.3520.isComplete;
export const select3520CalculatedLines = (state: any) => state.3520.calculatedLines;
