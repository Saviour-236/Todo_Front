// modeController.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const modeController = createSlice({
  name: "modeController",
  initialState:false,// true == dark mode /- false = light Mode
  reducers: {
    toggleModeReducer: (_state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { toggleModeReducer } = modeController.actions;
export default modeController.reducer;
