import { FlatList, StyleSheet, Text, View } from "react-native";
import BlogPostCard from "./BlogPostCard";

export default function BlogPosts() {
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
    {
      id: 6,
      title: "Myrkungens Förkämpe",
      bodyText:
        "En bepansrad jätteinsekt som agerar general för myrkungen och dess hord.",
    },
    {
      id: 7,
      title: "Vindhäxan",
      bodyText:
        "En mäktig varelse som kontrollerar stormar och viskar hot i vinden.",
    },
    {
      id: 8,
      title: "Glasormen",
      bodyText:
        "En genomskinlig orm som är nästan omöjlig att upptäcka tills det är för sent.",
    },
    {
      id: 9,
      title: "Rotfienden",
      bodyText:
        "Ett monster som växer från trädens rötter och infekterar skogen med sitt gift.",
    },
    {
      id: 10,
      title: "Månskuggornas Väktare",
      bodyText:
        "En uråldrig varelse som bara syns i månens ljus och skyddar hemliga skatter.",
    },
  ];

  return (
    <View style={styles.BlogPosts}>
      <Text style={styles.headerText}>Alla inlägg</Text>
      <FlatList
        data={testData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BlogPostCard oneBlogPost={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  BlogPosts: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
  headerText: {
    fontSize: 30,
  },
});
