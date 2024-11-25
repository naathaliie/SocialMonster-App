import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Min monster app",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={30}
              color={"green"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="blogPosts"
        options={{
          headerTitle: "Alla blogg-inlägg",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "ice-cream" : "ice-cream-outline"}
              size={30}
              color={"green"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="+not-found"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
