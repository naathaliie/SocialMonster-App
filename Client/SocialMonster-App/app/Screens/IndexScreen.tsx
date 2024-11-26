import { Button, StyleSheet, Text, View } from "react-native";

type IndexScreenProps = {
  setShowWelcomeScreen: (value: boolean) => void; // Funktion som tar en boolean och returnerar void
};

export default function IndexScreen({
  setShowWelcomeScreen,
}: IndexScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Detta får bli första sidan med en knapp som tar dig till "appen"
      </Text>
      <Button
        title="Gå till appen"
        onPress={() => setShowWelcomeScreen(false)}
      ></Button>
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
