import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-DState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-DState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-dSlice = createSlice({
  name: 'schedule-d',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-dSlice.actions;
export default schedule-dSlice.reducer;

// Selectors
export const selectSchedule-DValues = (state: any) => state.schedule-d.values;
export const selectSchedule-DErrors = (state: any) => state.schedule-d.errors;
export const selectSchedule-DIsComplete = (state: any) => state.schedule-d.isComplete;
export const selectSchedule-DCalculatedLines = (state: any) => state.schedule-d.calculatedLines;
