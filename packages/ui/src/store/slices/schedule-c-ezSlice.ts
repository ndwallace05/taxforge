import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-C-EZState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-C-EZState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-c-ezSlice = createSlice({
  name: 'schedule-c-ez',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-c-ezSlice.actions;
export default schedule-c-ezSlice.reducer;

// Selectors
export const selectSchedule-C-EZValues = (state: any) => state.schedule-c-ez.values;
export const selectSchedule-C-EZErrors = (state: any) => state.schedule-c-ez.errors;
export const selectSchedule-C-EZIsComplete = (state: any) => state.schedule-c-ez.isComplete;
export const selectSchedule-C-EZCalculatedLines = (state: any) => state.schedule-c-ez.calculatedLines;
