import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const testData = [
    {
      id: 1,
      title: "Draken från Eldbergen",
      bodyText:
        "En gigantisk eldsprutande drake som vakar över de brinnande bergen.",
    },
    {
      id: 2,
      title: "Skuggvargen",
      bodyText:
        "En mystisk varg som smälter in i skuggorna och anfaller när du minst anar det.",
    },
    {
      id: 3,
      title: "Tornjätten",
      bodyText:
        "En kolossal jätte som sägs bygga torn av stenar för att bevaka sitt rike.",
    },
    {
      id: 4,
      title: "Havshäxan",
      bodyText:
        "En slug och kraftfull varelse som lever djupt nere i det mörkaste havet.",
    },
    {
      id: 5,
      title: "Nattkrälaren",
      bodyText:
        "Ett spöklikt väsen som rör sig ljudlöst i natten och samlar på själar.",
    },
  ];
  return (
    <View style={styles.HomeScreen}>
      <View>
        <Text style={styles.headerText}>Läs alla inlägg</Text>
      </View>

      <View>//Här ska alla inlägg renderas</View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 30,
  },
});
