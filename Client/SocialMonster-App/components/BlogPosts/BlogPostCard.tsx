import { onePost } from "@/types";
import { StyleSheet, Text, View } from "react-native";

type BlogPostCardProps = {
  onePost: onePost;
};

export default function BlogPostCard({ onePost }: BlogPostCardProps) {
  return (
    <View style={styles.BlogPostCard}>
      <View>
        <Text style={styles.titleText}>{onePost.title}</Text>
      </View>
      <View>
        <Text>{onePost.bodyText}</Text>
      </View>
      <View>
        <Text>Skrivet av: {onePost.author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BlogPostCard: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    gap: 5,
  },
  titleText: {
    fontSize: 20,
  },
  bodyText: {
    fontSize: 15,
  },
});
