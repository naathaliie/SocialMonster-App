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

//För att spara och behålla vald användare
export type GuestUser = OneMonster;

/* export type CurrentUser = OneMonster;
 */
//Alla inlägg
export type Posts = onePost[];

//Ett inlägg
export type onePost = {
  id: number;
  author: number;
  title: string;
  bodyText: string;
  image?: string;
};

//För att kunna skicka med både monster.id och post.id och inte bara en payload
export type DeletePostPayload = {
  monsterId: number;
  postId: number;
};
