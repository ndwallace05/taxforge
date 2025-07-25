import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-3State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-3State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-3Slice = createSlice({
  name: 'schedule-3',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-3Slice.actions;
export default schedule-3Slice.reducer;

// Selectors
export const selectSchedule-3Values = (state: any) => state.schedule-3.values;
export const selectSchedule-3Errors = (state: any) => state.schedule-3.errors;
export const selectSchedule-3IsComplete = (state: any) => state.schedule-3.isComplete;
export const selectSchedule-3CalculatedLines = (state: any) => state.schedule-3.calculatedLines;
