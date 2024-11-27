import { Posts } from "../types";

export default function getCurrentUsersPosts(allPosts: Posts, userID: number) {
  console.log("hej från getCurrentUsersPosts funktionen");
  const myPosts = allPosts.filter((post) => {
    return post.author === userID;
  });
  if (myPosts) {
    return myPosts;
  } else {
    return null;
  }
}
