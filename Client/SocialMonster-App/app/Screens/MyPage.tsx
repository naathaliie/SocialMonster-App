import BlogPostModal from "@/components/NewBlogPostModal";
import BlogPosts from "@/components/BlogPosts/BlogPosts";
import { RootState } from "@/redux/store";
import getCurrentUsersPosts from "@/utils/getCurrentUsersPosts";
import { current } from "@reduxjs/toolkit";
import { useMemo, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { PaperProvider } from "react-native-paper";
import { useSelector } from "react-redux";
import { UseSelector } from "react-redux";
import NewBlogPostModal from "@/components/NewBlogPostModal";
import { OneMonster, Posts } from "@/types";

export default function MyPage() {
  const [showMyPosts, setShowMyPosts] = useState<boolean>(false);

  //Hämta vald användarprofil
  const currentUser: OneMonster = useSelector(
    (state: RootState) => state.currentuser
  );
  const allPosts: Posts = useSelector((state: RootState) => state.post);

  /*  Använder useMemo för att optimera prestandan genom att undvika att beräkna getCurrentUsersPosts 
    vid varje render. Funktionen körs endast om allPosts eller currentUser?.id ändras. */
  const getPosts = useMemo(() => {
    return currentUser ? getCurrentUsersPosts(allPosts, currentUser.id) : [];
  }, [allPosts, currentUser?.id]);

  /*   const getPosts = getCurrentUsersPosts(allPosts, currentUser.id);
   */
  return (
    <View style={styles.container}>
      <NewBlogPostModal authorId={currentUser.id} position="right" />

      <Text>Välkommen {currentUser.name}!</Text>

      <View>
        <Button
          title="mina inlägg"
          onPress={() => {
            setShowMyPosts(!showMyPosts);
          }}
        />
        <Button title="mina favoriter" />
      </View>

      <View style={styles.myBlogPostsContainer}>
        {showMyPosts && getPosts ? <BlogPosts posts={getPosts} /> : <></>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    gap: 10,
  },
  myBlogPostsContainer: {
    height: "80%",
    width: "95%",
  },
});
