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
    image: "blue.png",
  },
  {
    id: 2,
    name: "Zorath",
    age: 22,
    color: "blå",
    image: "cyan.png",
  },
  {
    id: 3,
    name: "Vexa",
    age: 45,
    color: "lila",
    image: "earthy.png",
  },
  {
    id: 4,
    name: "Throgar",
    age: 200,
    color: "brun",
    image: "horns.png",
  },
  {
    id: 5,
    name: "Zara",
    age: 10,
    color: "röd",
    image: "morbid.png",
  },
  {
    id: 6,
    name: "Nork",
    age: 60,
    color: "svart",
    image: "pinkie.png",
  },
  {
    id: 7,
    name: "Phelis",
    age: 120,
    color: "vit",
    image: "subconcious.png",
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
    // Action för att ta bort monster (skicka med id därav blir payload number)
    removeMonster: (state, action: PayloadAction<number>) => {
      return state.filter((monster) => monster.id !== action.payload);
    },
  },
});

export const { addMonster, removeMonster } = monsterSlice.actions;

export default monsterSlice.reducer;
