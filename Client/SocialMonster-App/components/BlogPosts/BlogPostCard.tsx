import { StyleSheet, Text, View } from "react-native";

type BlogPostCardProps = {
  oneBlogPost: { id: number; title: string; bodyText: string };
};

export default function BlogPostCard({ oneBlogPost }: BlogPostCardProps) {
  return (
    <View style={styles.BlogPostCard}>
      <View>
        <Text style={styles.titleText}>{oneBlogPost.title}</Text>
      </View>
      <View>
        <Text>{oneBlogPost.bodyText}</Text>
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
