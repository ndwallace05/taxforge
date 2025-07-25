import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 706-GS(D)State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 706-GS(D)State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 706-gs(d)Slice = createSlice({
  name: '706-gs(d)',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 706-gs(d)Slice.actions;
export default 706-gs(d)Slice.reducer;

// Selectors
export const select706-GS(D)Values = (state: any) => state.706-gs(d).values;
export const select706-GS(D)Errors = (state: any) => state.706-gs(d).errors;
export const select706-GS(D)IsComplete = (state: any) => state.706-gs(d).isComplete;
export const select706-GS(D)CalculatedLines = (state: any) => state.706-gs(d).calculatedLines;
