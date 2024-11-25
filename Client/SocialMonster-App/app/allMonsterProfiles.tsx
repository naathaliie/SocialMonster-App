import { StyleSheet, Text, View } from "react-native";

export default function AllMonsterProfiles() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Alla monsterprofiler</Text>
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
});
