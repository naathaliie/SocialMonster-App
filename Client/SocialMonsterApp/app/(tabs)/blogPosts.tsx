import { StyleSheet, Text, View } from "react-native";

export default function BlogPosts() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>BlogPost Page</Text>
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
