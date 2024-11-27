// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import monsterReducer from "./monsterSlice";
import currentUserReducer from "./currentUserSlice";
import postReducer from "./postSlice";

// Definiera typ för hela appens state
export const store = configureStore({
  reducer: {
    monster: monsterReducer,
    currentuser: currentUserReducer,
    post: postReducer,
  },
});

// Definiera typer för RootState och AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
