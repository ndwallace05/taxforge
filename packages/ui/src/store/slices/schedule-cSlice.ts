import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-CState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-CState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-cSlice = createSlice({
  name: 'schedule-c',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-cSlice.actions;
export default schedule-cSlice.reducer;

// Selectors
export const selectSchedule-CValues = (state: any) => state.schedule-c.values;
export const selectSchedule-CErrors = (state: any) => state.schedule-c.errors;
export const selectSchedule-CIsComplete = (state: any) => state.schedule-c.isComplete;
export const selectSchedule-CCalculatedLines = (state: any) => state.schedule-c.calculatedLines;
