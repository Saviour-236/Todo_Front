import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Position {
  x: number;
  y: number;
}

interface InitialState {
  text: string;
  position: Position;
}

const initialState: InitialState = {
  text: "",
  position: { x: 0, y: 0 }
};

const tooltipTextSlice = createSlice({
  name: "tooltipText",
  initialState,
  reducers: {
    initializeTooltipReducer: (
      _state,
      action: PayloadAction<InitialState>
    ) => {
      return action.payload;
    },
    removeTooltipTextReducer: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
});

// Correct export of the reducer actions
export const { initializeTooltipReducer, removeTooltipTextReducer } = tooltipTextSlice.actions;
export default tooltipTextSlice.reducer;
