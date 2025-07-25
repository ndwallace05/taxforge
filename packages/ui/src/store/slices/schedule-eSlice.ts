import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-EState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-EState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-eSlice = createSlice({
  name: 'schedule-e',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-eSlice.actions;
export default schedule-eSlice.reducer;

// Selectors
export const selectSchedule-EValues = (state: any) => state.schedule-e.values;
export const selectSchedule-EErrors = (state: any) => state.schedule-e.errors;
export const selectSchedule-EIsComplete = (state: any) => state.schedule-e.isComplete;
export const selectSchedule-ECalculatedLines = (state: any) => state.schedule-e.calculatedLines;
