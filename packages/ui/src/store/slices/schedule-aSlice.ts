import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-AState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-AState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-aSlice = createSlice({
  name: 'schedule-a',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-aSlice.actions;
export default schedule-aSlice.reducer;

// Selectors
export const selectSchedule-AValues = (state: any) => state.schedule-a.values;
export const selectSchedule-AErrors = (state: any) => state.schedule-a.errors;
export const selectSchedule-AIsComplete = (state: any) => state.schedule-a.isComplete;
export const selectSchedule-ACalculatedLines = (state: any) => state.schedule-a.calculatedLines;
