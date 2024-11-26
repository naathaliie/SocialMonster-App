import UserIcon from "@/components/UserIcon";
import { RootState } from "../../redux/store";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
  //Hämta alla monster från monsterSlicen
  const monsterProfiles = useSelector((state: RootState) => state.monster);

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Här hittar du alla monsterprofiler 📌
        </Text>
      </View>

      <View style={styles.profilesContainer}>
        {monsterProfiles.map((monster) => {
          return (
            <View key={monster.id}>
              <UserIcon monsterImage={monster.image} />
              <Text style={{ textAlign: "center" }}>{monster.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    gap: 10,
  },
  infoBox: {
    padding: 10,
    marginBottom: 50,
    height: "25%",
    width: "100%",
    justifyContent: "center",
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
  },
  profilesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
});
