import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { entriesReducer } from "../redux/entriesSlice";

export const store = configureStore({
  reducer: {
    entries: entriesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
