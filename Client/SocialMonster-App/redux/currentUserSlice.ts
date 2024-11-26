import { CurrentUser, GuestUser, OneMonster } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//initial state med typ sätter guestUser barar för att jag inte fick det att fungera med null
const initialUserState: CurrentUser | GuestUser = {
  name: "GuestUser",
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
