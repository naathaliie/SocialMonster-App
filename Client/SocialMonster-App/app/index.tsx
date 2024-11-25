import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello Expo</Text>
      <Link style={styles.linkStyle} href={"/allMonsterProfiles"}>
        Se alla monsterProfiler
      </Link>
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
  textStyle: {
    color: "white",
  },
  linkStyle: {
    color: "white",
    textDecorationLine: "underline",
    fontSize: 20,
  },
});
