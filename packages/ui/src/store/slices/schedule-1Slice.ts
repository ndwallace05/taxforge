import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-1State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-1State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-1Slice = createSlice({
  name: 'schedule-1',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-1Slice.actions;
export default schedule-1Slice.reducer;

// Selectors
export const selectSchedule-1Values = (state: any) => state.schedule-1.values;
export const selectSchedule-1Errors = (state: any) => state.schedule-1.errors;
export const selectSchedule-1IsComplete = (state: any) => state.schedule-1.isComplete;
export const selectSchedule-1CalculatedLines = (state: any) => state.schedule-1.calculatedLines;
