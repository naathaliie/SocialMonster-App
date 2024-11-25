import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function index() {
  return (
    <Pressable
      onPress={() => {
        console.log("det fungerar");
      }}
      style={styles.container}
    >
      <Ionicons name="person-circle" size={40} color={"black"} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
