import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-EICState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-EICState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-eicSlice = createSlice({
  name: 'schedule-eic',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-eicSlice.actions;
export default schedule-eicSlice.reducer;

// Selectors
export const selectSchedule-EICValues = (state: any) => state.schedule-eic.values;
export const selectSchedule-EICErrors = (state: any) => state.schedule-eic.errors;
export const selectSchedule-EICIsComplete = (state: any) => state.schedule-eic.isComplete;
export const selectSchedule-EICCalculatedLines = (state: any) => state.schedule-eic.calculatedLines;
