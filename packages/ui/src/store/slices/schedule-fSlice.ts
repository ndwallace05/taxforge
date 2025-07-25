import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-FState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-FState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-fSlice = createSlice({
  name: 'schedule-f',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-fSlice.actions;
export default schedule-fSlice.reducer;

// Selectors
export const selectSchedule-FValues = (state: any) => state.schedule-f.values;
export const selectSchedule-FErrors = (state: any) => state.schedule-f.errors;
export const selectSchedule-FIsComplete = (state: any) => state.schedule-f.isComplete;
export const selectSchedule-FCalculatedLines = (state: any) => state.schedule-f.calculatedLines;
