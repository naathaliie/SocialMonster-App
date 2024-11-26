import { Provider } from "react-redux";
import { RootState, store } from "../redux/store"; // Importera Redux store
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";
import { useSelector } from "react-redux";
import UserIcon from "@/components/UserIcon"; // Din UserIcon-komponent
import HomeScreen from "./Screens/HomeScreen"; // Importera Home-skärmen
import ProfileScreen from "./Screens/ProfilesScreen"; // Importera Profile-skärmen

// Skapa en Drawer Navigator
const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    // Se till att hela applikationen är omsluten av <Provider>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

function AppNavigator() {
  // Hämta currentUser från Redux state
  const currentUser = useSelector((state: RootState) => state.currentuser);

  return (
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
          <TouchableOpacity
            onPress={() => {
              console.log("Du klickade på profilikonen");
            }}
            style={{ marginRight: 10 }}
          >
            {/* Visa användarikon om currentUser finns */}
            {currentUser && (
              <UserIcon monsterImage={currentUser.image} size="small" />
            )}
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
    </Drawer.Navigator>
  );
}
