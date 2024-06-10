// store.ts
import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './theme';
import tooltipTextReducer from './tooltipText';
const store = configureStore({
  reducer: {
    themeMode: modeReducer,
    tooltipText:tooltipTextReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
