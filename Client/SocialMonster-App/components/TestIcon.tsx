import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function index() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <Pressable
      onPress={() => {
        console.log("det fungerar");
      }}
      style={styles.container}
    >
      <Ionicons name="person-circle" size={40} color={"black"} />
    </Pressable>
    /*  {showdrawer && <} */
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
