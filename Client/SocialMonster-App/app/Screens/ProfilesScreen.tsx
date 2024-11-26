import { RootState } from "../../redux/store";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
  //Hämta alla monster från monsterSlicen
  const monsterProfiles = useSelector((state: RootState) => state.monster);

  //Switch för att få ut bilder

  function getimage(image: string) {
    switch (image) {
      case "blue.png":
        return require("../../assets/images/blue.png");
      case "cyan.png":
        return require("../../assets/images/cyan.png");
      case "earthy.png":
        return require("../../assets/images/earthy.png");
      case "horns.png":
        return require("../../assets/images/horns.png");
      case "morbid.png":
        return require("../../assets/images/morbid.png");
      case "pinkie.png":
        return require("../../assets/images/pinkie.png");
      case "subconcious.png":
        return require("../../assets/images/subconcious.png");
      case "theodor.png":
        return require("../../assets/images/theodor.png");
      default:
        break;
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {monsterProfiles.map((monster) => {
        return (
          <View key={monster.id}>
            <Text>{monster.name}</Text>
            {monster.image && (
              <Image
                source={getimage(monster.image)}
                style={styles.imgStyle}
                contentFit="fill"
              />
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    height: 100,
    width: 100,
    backgroundColor: "#0553",
  },
});
