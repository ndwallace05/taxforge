import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-JState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-JState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-jSlice = createSlice({
  name: 'schedule-j',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-jSlice.actions;
export default schedule-jSlice.reducer;

// Selectors
export const selectSchedule-JValues = (state: any) => state.schedule-j.values;
export const selectSchedule-JErrors = (state: any) => state.schedule-j.errors;
export const selectSchedule-JIsComplete = (state: any) => state.schedule-j.isComplete;
export const selectSchedule-JCalculatedLines = (state: any) => state.schedule-j.calculatedLines;
