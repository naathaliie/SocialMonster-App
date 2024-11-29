import BlogPosts from "@/components/BlogPosts/BlogPosts";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
export default function HomeScreen() {
  //Hämta alla poster
  const allPosts = useSelector((state: RootState) => state.post);
  return (
    <View style={styles.HomeScreen}>
      <View style={styles.infoBox}>
        <Image
          source={require("../../assets/images/monsters.png")}
          style={styles.imgStyle}
        />
      </View>
      <View></View>
      <BlogPosts posts={allPosts} overView={true} />
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
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
