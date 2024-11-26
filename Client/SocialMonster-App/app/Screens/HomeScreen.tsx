import BlogPosts from "@/components/BlogPosts/BlogPosts";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
export default function HomeScreen() {
  return (
    <View style={styles.HomeScreen}>
      <View style={styles.infoBox}>
        <Image
          source={require("../../assets/images/monsters.jpeg")}
          style={styles.imgStyle}
          contentFit="fill"
        />
      </View>
      <BlogPosts />
    </View>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    gap: 10,
  },
  headerText: {
    fontSize: 30,
  },

  infoBox: {
    height: "30%",
    width: "100%",
    alignItems: "center",
  },
  imgStyle: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
