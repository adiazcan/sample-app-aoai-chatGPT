import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./slices/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['documentStore/setDocument'],
        ignoredPaths: ['documentStore.document.File.src.file'],
      },
    }),
})

export const dispatch: AppDispatch = store.dispatch;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;