import { RootState } from "@/redux/store";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { UseSelector } from "react-redux";
export default function MyPage() {
  //Hämta vald användarprofil
  const currentUser = useSelector((state: RootState) => state.currentuser);

  return (
    <View style={styles.container}>
      <Text>Välkommen {currentUser.name}</Text>
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
});
