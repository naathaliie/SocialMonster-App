// redux/monsterSlice.ts
import { Monsters, OneMonster } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state med typ
const initialMonsterState: Monsters = [
  {
    id: 1,
    name: "Gravix",
    age: 150,
    color: "grön",
    breed: "Troll",
  },
  {
    id: 2,
    name: "Zorath",
    age: 22,
    color: "blå",
    breed: "Drake",
  },
  {
    id: 3,
    name: "Vexa",
    age: 45,
    color: "lila",
    breed: "Vampyr",
  },
  {
    id: 4,
    name: "Throgar",
    age: 200,
    color: "brun",
    breed: "Ogre",
  },
  {
    id: 5,
    name: "Zara",
    age: 10,
    color: "röd",
    breed: "Demon",
  },
  {
    id: 6,
    name: "Nork",
    age: 60,
    color: "svart",
    breed: "Werewolf",
  },
  {
    id: 7,
    name: "Phelis",
    age: 120,
    color: "vit",
    breed: "Sphinx",
  },
];

const monsterSlice = createSlice({
  name: "monster",
  initialState: initialMonsterState,
  reducers: {
    // Action för att lägga till monster
    addMonster: (state, action: PayloadAction<OneMonster>) => {
      state.push(action.payload);
    },
    // Action för att ta bort monster
    removeMonster: (state, action: PayloadAction<number>) => {
      return state.filter((monster) => monster.id !== action.payload);
    },
  },
});

export const { addMonster, removeMonster } = monsterSlice.actions;

export default monsterSlice.reducer;
