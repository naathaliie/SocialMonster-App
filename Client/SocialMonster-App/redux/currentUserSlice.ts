import { GuestUser, OneMonster } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: OneMonster | GuestUser = {
  id: 0,
  name: "GuestUser",
  age: 0,
  color: "none",
  image: "GuestUser.png",
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: initialUserState,
  reducers: {
    // Action för att uppdatera currentUser
    updateCurrentUser: (state, action: PayloadAction<OneMonster>) => {
      return action.payload; // State uppdateras till det nya värdet
    },
  },
});

export const { updateCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
