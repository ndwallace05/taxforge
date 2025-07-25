import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-HState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-HState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-hSlice = createSlice({
  name: 'schedule-h',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-hSlice.actions;
export default schedule-hSlice.reducer;

// Selectors
export const selectSchedule-HValues = (state: any) => state.schedule-h.values;
export const selectSchedule-HErrors = (state: any) => state.schedule-h.errors;
export const selectSchedule-HIsComplete = (state: any) => state.schedule-h.isComplete;
export const selectSchedule-HCalculatedLines = (state: any) => state.schedule-h.calculatedLines;
