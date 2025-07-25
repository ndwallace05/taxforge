import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-SEState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-SEState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-seSlice = createSlice({
  name: 'schedule-se',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-seSlice.actions;
export default schedule-seSlice.reducer;

// Selectors
export const selectSchedule-SEValues = (state: any) => state.schedule-se.values;
export const selectSchedule-SEErrors = (state: any) => state.schedule-se.errors;
export const selectSchedule-SEIsComplete = (state: any) => state.schedule-se.isComplete;
export const selectSchedule-SECalculatedLines = (state: any) => state.schedule-se.calculatedLines;
