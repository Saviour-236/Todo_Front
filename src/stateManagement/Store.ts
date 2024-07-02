// store.ts
import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './themeFeature';
import tooltipTextSliceReducers from './tooltipTextFeature';
import todoSliceReducer from './Todo/todoLists'
const store = configureStore({
  reducer: {
    themeMode: modeReducer,
    tooltipText:tooltipTextSliceReducers,
    todo:todoSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
