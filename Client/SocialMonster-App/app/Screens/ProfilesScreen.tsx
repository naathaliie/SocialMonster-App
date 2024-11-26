import { RootState } from "@/redux/store";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
  //Hämta alla monster från monsterSlicen
  const monsterProfiles = useSelector((state: RootState) => state.monster);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {monsterProfiles.map((monster) => {
        return (
          <View>
            <Text>{monster.name}</Text>
          </View>
        );
      })}
    </View>
  );
}
