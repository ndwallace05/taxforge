import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Schedule-RState {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: Schedule-RState = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const schedule-rSlice = createSlice({
  name: 'schedule-r',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = schedule-rSlice.actions;
export default schedule-rSlice.reducer;

// Selectors
export const selectSchedule-RValues = (state: any) => state.schedule-r.values;
export const selectSchedule-RErrors = (state: any) => state.schedule-r.errors;
export const selectSchedule-RIsComplete = (state: any) => state.schedule-r.isComplete;
export const selectSchedule-RCalculatedLines = (state: any) => state.schedule-r.calculatedLines;
