import { FlatList, StyleSheet, Text, View } from "react-native";
import BlogPostCard from "./BlogPostCard";
import { Posts } from "../../types";

type BlogPostProps = {
  posts: Posts;
};

export default function BlogPosts({ posts }: BlogPostProps) {
  return (
    <View style={styles.BlogPosts}>
      <Text style={styles.headerText}>Alla inlägg</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BlogPostCard onePost={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  BlogPosts: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
  headerText: {
    fontSize: 30,
  },
});
