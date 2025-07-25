import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-2State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-2State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-2Slice = createSlice({
  name: 'schedule-2',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-2Slice.actions;
export default schedule-2Slice.reducer;

// Selectors
export const selectSchedule-2Values = (state: any) => state.schedule-2.values;
export const selectSchedule-2Errors = (state: any) => state.schedule-2.errors;
export const selectSchedule-2IsComplete = (state: any) => state.schedule-2.isComplete;
export const selectSchedule-2CalculatedLines = (state: any) => state.schedule-2.calculatedLines;
