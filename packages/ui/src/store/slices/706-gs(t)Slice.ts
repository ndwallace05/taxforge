import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface 706-GS(T)State {
  values: Record<string, number | string>;
  errors: Record<string, string>;
  isComplete: boolean;
  calculatedLines: Record<string, number>;
}

const initialState: 706-GS(T)State = {
  values: {},
  errors: {},
  isComplete: false,
  calculatedLines: {}
};

const 706-gs(t)Slice = createSlice({
  name: '706-gs(t)',
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

export const { setValue, setError, setCalculatedValue, setComplete, reset } = 706-gs(t)Slice.actions;
export default 706-gs(t)Slice.reducer;

// Selectors
export const select706-GS(T)Values = (state: any) => state.706-gs(t).values;
export const select706-GS(T)Errors = (state: any) => state.706-gs(t).errors;
export const select706-GS(T)IsComplete = (state: any) => state.706-gs(t).isComplete;
export const select706-GS(T)CalculatedLines = (state: any) => state.706-gs(t).calculatedLines;
