import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfilesScreen";
import { useState } from "react";
import IndexScreen from "./Screens/IndexScreen";

// Skapa en Drawer Navigator
const Drawer = createDrawerNavigator();

export default function RootLayout() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState<boolean>(true);
  return (
    <>
      {showWelcomeScreen ? (
        <IndexScreen setShowWelcomeScreen={setShowWelcomeScreen} />
      ) : (
        <Drawer.Navigator
          screenOptions={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 10 }}
              >
                <Ionicons name="menu" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
              drawerActiveTintColor: "pink", // Färg när Drawer-item är aktiv
              drawerInactiveTintColor: "gray", // Färg när Drawer-item inte är aktiv
            }}
          />
          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
              drawerActiveTintColor: "pink", // Färg när Drawer-item är aktiv
              drawerInactiveTintColor: "gray", // Färg när Drawer-item inte är aktiv
            }}
          />
        </Drawer.Navigator>
      )}
    </>
  );
}
