import { onePost } from "@/types";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type BlogPostCardProps = {
  onePost: onePost;
  overView?: boolean;
};

export default function BlogPostCard({ onePost, overView }: BlogPostCardProps) {
  const navigation = useNavigation(); // Hämta navigation-objektet från useNavigation

  //Switch för att få ut bilder
  function getimage(image: string) {
    switch (image) {
      case "darkForrest.png":
        return require("../../assets/images/darkForrest.png");
      case "scaryHand.png":
        return require("../../assets/images/scaryHand.png");
      case "witch.png":
        return require("../../assets/images/witch.png");
      default:
        break;
    }
  }

  function readThisPost() {
    console.log("du klickade på readThisPost");
  }

  return (
    <Pressable onPress={() => readThisPost()} style={styles.BlogPostCard}>
      {overView ? (
        <>
          <View style={styles.overViewContainer}>
            <View>
              {onePost.image && (
                <Image
                  source={getimage(onePost.image)}
                  style={styles.postImg}
                />
              )}
            </View>
            <View style={styles.overViewTextContainer}>
              <Text
                style={styles.titleText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {onePost.title}
              </Text>
              <Text style={styles.authorText}>
                Skrivet av: {onePost.author}
              </Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={styles.postContainer}>
            <Text style={styles.titleText}>{onePost.title}</Text>
          </View>
          <View>
            <Text>{onePost.bodyText}</Text>
          </View>
          <View>
            <Text>Skrivet av: {onePost.author}</Text>
          </View>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  BlogPostCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  overViewContainer: {
    flexDirection: "row",
    margin: 10,
    gap: 10,
    width: "90%",
  },
  postImg: {
    height: 70,
    width: 70,
    backgroundColor: "#0553",
    borderRadius: 20,
  },
  overViewTextContainer: {
    justifyContent: "center",
    maxWidth: "85%",
    minWidth: "65%",
    margin: 5,
  },
  titleText: {
    fontSize: 20,
  },
  authorText: {
    fontSize: 13,
    fontStyle: "italic",
  },
  bodyText: {
    fontSize: 15,
  },
  postContainer: {},
});
