//Alla monster
export type Monsters = OneMonster[];

//Ett monster
export type OneMonster = {
  id: number;
  name: string;
  age: number;
  color: string;
  image: string;
};

export type GuestUser = {
  name: string;
  image: string;
};

//För att spara och behålla vald användare
export type CurrentUser = OneMonster;
