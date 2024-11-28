import { FlatList, StyleSheet, Text, View } from "react-native";
import BlogPostCard from "./BlogPostCard";
import { Posts } from "../../types";

type BlogPostProps = {
  posts: Posts;
  overView?: boolean;
};

export default function BlogPosts({ posts, overView }: BlogPostProps) {
  return (
    <View style={styles.BlogPosts}>
      <Text style={styles.headerText}>Inlägg</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BlogPostCard onePost={item} overView={overView} />
        )}
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
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
