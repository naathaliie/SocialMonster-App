import { Image } from "expo-image";
import { View, Text, StyleSheet } from "react-native";

type UserIconProps = {
  monsterImage: string;
};

export default function UserIcon({ monsterImage }: UserIconProps) {
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
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Image source={getimage(monsterImage)} style={styles.imgStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  imgStyle: {
    height: 100,
    width: 100,
    backgroundColor: "#0553",
    borderRadius: 100,
    margin: 5,
  },
});
