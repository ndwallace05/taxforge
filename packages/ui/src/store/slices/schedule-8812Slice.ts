import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-8812State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-8812State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-8812Slice = createSlice({
  name: 'schedule-8812',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-8812Slice.actions;
export default schedule-8812Slice.reducer;

// Selectors
export const selectSchedule-8812Values = (state: any) => state.schedule-8812.values;
export const selectSchedule-8812Errors = (state: any) => state.schedule-8812.errors;
export const selectSchedule-8812IsComplete = (state: any) => state.schedule-8812.isComplete;
export const selectSchedule-8812CalculatedLines = (state: any) => state.schedule-8812.calculatedLines;
