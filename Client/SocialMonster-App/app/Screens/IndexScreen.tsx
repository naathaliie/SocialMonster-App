import { Image } from "expo-image";
import {
  Button,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

type IndexScreenProps = {
  setShowWelcomeScreen: (value: boolean) => void; // Funktion som tar en boolean och returnerar void
};

export default function IndexScreen({
  setShowWelcomeScreen,
}: IndexScreenProps) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#292057"} />
      <Image
        source={require("../../assets/images/socialMonsterImg.jpeg")}
        style={styles.imgStyle}
        contentFit="cover"
        allowDownscaling={true}
      />
      <Pressable style={styles.btn} onPress={() => setShowWelcomeScreen(false)}>
        <Text style={styles.btnText}>Gå till appen</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292c",
  },
  imgStyle: {
    flex: 1, // Täcker hela föräldraview
    width: "100%",
    height: "100%",
    position: "absolute", // Gör att bilden fyller hela skärme
    backgroundColor: "#0553",
  },
  linkStyle: {
    color: "white",
    textDecorationLine: "underline",
    fontSize: 20,
  },
  btn: {
    backgroundColor: "#08AEAD",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 20,
    padding: 10,
    marginTop: 500,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
