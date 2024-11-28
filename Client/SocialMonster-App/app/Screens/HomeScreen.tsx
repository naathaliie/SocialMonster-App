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
      <StatusBar backgroundColor={"#00E1D3"} />

      <Image
        source={require("../../assets/images/manyMonsters.jpeg")}
        style={styles.backgroundImg}
        contentFit="cover"
        allowDownscaling={true}
      />

      <View style={styles.infoBox}>
        <Image
          source={require("../../assets/images/monsters.png")}
          style={styles.imgStyle}
        />
      </View>
      <View>
        <Text>
          Här kanske det skall vara lite information Här kanske det skall vara
          lite information
        </Text>
        <Text>Här kanske det skall vara lite information</Text>
        <Text>Här kanske det skall vara lite information</Text>
        <Text>Här kanske det skall vara lite information</Text>
        <Text>Här kanske det skall vara lite information</Text>
      </View>
      <BlogPosts posts={allPosts} overView={true} />
      <View>
        <Text>Här kanske det skall vara lite information</Text>
        <Text>Här kanske det skall vara lite information</Text>
        <Text>Här kanske det skall vara lite information</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1, // Täcker hela föräldraview
    width: "100%",
    height: "100%",
    position: "absolute", // Gör att bilden fyller hela skärme
    backgroundColor: "#0553",
    opacity: 0,
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
