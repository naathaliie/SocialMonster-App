// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import monsterReducer from "./monsterSlice";

// Definiera typ för hela appens state
export const store = configureStore({
  reducer: {
    monster: monsterReducer,
  },
});

// Definiera typer för RootState och AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
