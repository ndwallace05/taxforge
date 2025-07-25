import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5307State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5307State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5307Slice = createSlice({
  name: '5307',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5307Slice.actions;
export default 5307Slice.reducer;

// Selectors
export const select5307Values = (state: any) => state.5307.values;
export const select5307Errors = (state: any) => state.5307.errors;
export const select5307IsComplete = (state: any) => state.5307.isComplete;
export const select5307CalculatedLines = (state: any) => state.5307.calculatedLines;
