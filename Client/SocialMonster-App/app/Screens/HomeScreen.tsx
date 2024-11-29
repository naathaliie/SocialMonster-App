import BlogPosts from "@/components/BlogPosts/BlogPosts";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import NewBlogPostModal from "../../components/NewBlogPostModal";
import { OneMonster } from "@/types";
export default function HomeScreen() {
  //Hämta alla poster
  const allPosts = useSelector((state: RootState) => state.post);
  //Hämtar currensUser för newpost
  const currentUser: OneMonster = useSelector(
    (state: RootState) => state.currentuser
  );
  return (
    <View style={styles.HomeScreen}>
      <NewBlogPostModal authorId={currentUser.id} position="right" />

      <View style={styles.infoBox}>
        <Image
          source={require("../../assets/images/monsters.png")}
          style={styles.imgStyle}
        />
      </View>
      <View>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic velit
          aut dicta deleniti, alias cumque quo iusto, ex fuga incidunt officia
          ducimus quae excepturi ullam veniam voluptate sit ratione dolores.
        </Text>
      </View>
      <View>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic velit
          aut dicta deleniti, alias cumque quo iusto, ex fuga incidunt officia
          ducimus quae excepturi ullam veniam voluptate sit ratione dolores.
        </Text>
      </View>
      <BlogPosts posts={allPosts} overView={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    alignItems: "center",
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
