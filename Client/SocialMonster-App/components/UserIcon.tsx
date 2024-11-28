import { Image } from "expo-image";
import { View, Text, StyleSheet } from "react-native";

type UserIconProps = {
  monsterImage: string;
  size: "xs" | "small" | "large";
  choosen?: boolean;
};

export default function UserIcon({
  monsterImage,
  size,
  choosen,
}: UserIconProps) {
  //Switch för att få ut bilder
  function getimage(image: string) {
    switch (image) {
      case "blue.png":
        return require("../assets/images/blue.png");
      case "cyan.png":
        return require("../assets/images/cyan.png");
      case "earthy.png":
        return require("../assets/images/earthy.png");
      case "horns.png":
        return require("../assets/images/horns.png");
      case "morbid.png":
        return require("../assets/images/morbid.png");
      case "pinkie.png":
        return require("../assets/images/pinkie.png");
      case "subconcious.png":
        return require("../assets/images/subconcious.png");
      case "theodor.png":
        return require("../assets/images/theodor.png");
      case "GuestUser.png":
        return require("../assets/images/GuestUser.png");
      default:
        break;
    }
  }

  //sätt rätt style
  const imageStyle =
    size === "xs"
      ? styles.imgStyleXs
      : size === "small"
      ? styles.imgStyleSmall
      : styles.imgStyleLarge;

  return (
    <View style={[styles.container, choosen && styles.choosen]}>
      <Image source={getimage(monsterImage)} style={imageStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  imgStyleLarge: {
    height: 100,
    width: 100,
    backgroundColor: "#0553",
    borderRadius: 100,
    margin: 5,
  },
  imgStyleSmall: {
    height: 50,
    width: 50,
    backgroundColor: "#0553",
    borderRadius: 100,
    margin: 5,
  },
  imgStyleXs: {
    height: 30,
    width: 30,
    backgroundColor: "#0553",
    borderRadius: 100,
  },
  choosen: {
    backgroundColor: "#1E8A8A",
    borderColor: "#1E8A8A",
    borderWidth: 5,
    borderRadius: 100,
  },
});
