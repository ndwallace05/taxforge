import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 944-XState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 944-XState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 944-xSlice = createSlice({
  name: '944-x',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 944-xSlice.actions;
export default 944-xSlice.reducer;

// Selectors
export const select944-XValues = (state: any) => state.944-x.values;
export const select944-XErrors = (state: any) => state.944-x.errors;
export const select944-XIsComplete = (state: any) => state.944-x.isComplete;
export const select944-XCalculatedLines = (state: any) => state.944-x.calculatedLines;
