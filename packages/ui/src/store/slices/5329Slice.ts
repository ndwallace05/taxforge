import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 5329State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 5329State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 5329Slice = createSlice({
  name: '5329',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5329Slice.actions;
export default 5329Slice.reducer;

// Selectors
export const select5329Values = (state: any) => state.5329.values;
export const select5329Errors = (state: any) => state.5329.errors;
export const select5329IsComplete = (state: any) => state.5329.isComplete;
export const select5329CalculatedLines = (state: any) => state.5329.calculatedLines;
