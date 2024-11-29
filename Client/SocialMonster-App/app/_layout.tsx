import { Provider } from "react-redux";
import { RootState, store } from "../redux/store"; // Importera Redux store
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text, StatusBar, Pressable } from "react-native";
import { useSelector } from "react-redux";
import UserIcon from "@/components/UserIcon"; // Din UserIcon-komponent
import HomeScreen from "./Screens/HomeScreen"; // Importera Home-skärmen
import ProfileScreen from "./Screens/ProfilesScreen"; // Importera Profile-skärmen
import { useState } from "react";
import IndexScreen from "./Screens/IndexScreen";
import MyPage from "./Screens/MyPage";
import ChooseYourProfile from "./Screens/ChooseYourProfile";
import { navigate } from "expo-router/build/global-state/routing";

// Skapa en Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // Se till att hela applikationen är omsluten av <Provider> för att komma åt redux
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

function AppNavigator() {
  //useState för att visa första sidan när man startar appen
  const [showWelcomeScreeen, setShowWelcomeScreen] = useState<boolean>(true);
  const [showChooseYourProfile, setShowChooseYourProfile] =
    useState<boolean>(false);
  // Hämta currentUser från Redux state
  const currentUser = useSelector((state: RootState) => state.currentuser);

  return (
    <>
      {showWelcomeScreeen ? (
        <IndexScreen
          setShowWelcomeScreen={setShowWelcomeScreen}
          setShowChooseYourProfile={setShowChooseYourProfile}
        />
      ) : showChooseYourProfile ? (
        <ChooseYourProfile
          setShowChooseYourProfile={setShowChooseYourProfile}
        />
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
            headerRight: () => (
              <Pressable
                onPress={() => {
                  console.log("Du klickade på profilikonen");
                  navigation.navigate("Mina sidor");
                }}
                style={{ marginRight: 10 }}
              >
                <UserIcon monsterImage={currentUser.image} size="small" />
              </Pressable>
            ),
            headerStyle: {
              backgroundColor: "white",
              height: 80,
              borderBottomWidth: 1,
              borderBottomColor: "black",
            },
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
              headerTitle: "", // Döljer titeln från denna Screen
            }}
          />
          <Drawer.Screen
            name="Användarprofiler"
            component={ProfileScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
              drawerActiveTintColor: "pink", // Färg när Drawer-item är aktiv
              drawerInactiveTintColor: "gray", // Färg när Drawer-item inte är aktiv
            }}
          />
          <Drawer.Screen
            name="Mina sidor"
            component={MyPage}
            options={{
              drawerIcon: ({ color, size }) => (
                <UserIcon monsterImage={currentUser.image} size="xs" />
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
