// hooks/useSetChoosenUser.ts
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { updateCurrentUser } from "@/redux/currentUserSlice";
import { OneMonster } from "@/types";
import { DrawerNavigationProp } from "@react-navigation/drawer";

//En egenskapad hook för att kunna använda useDispatch och komma åt redux-slices utanför providern

export function useSetChoosenUser() {
  const dispatch = useDispatch();
  // Skapa navigation-instans för att kunna gå till vald profils MyPage
  // *Typa navigation-instansen
  const navigation = useNavigation<NavigationProp>();

  //för att navigatorn inte vill acceptera att vi skickar in "MyPage" i navigation.navigate
  //Utan rader med * blir det en röd linje under, även om det fungerar
  // * Definiera Drawer-parametrarna
  type DrawerParamList = {
    Profile: undefined;
    MyPage: undefined;
  };

  type NavigationProp = DrawerNavigationProp<DrawerParamList, "Profile">;

  return function (oneMonster: OneMonster) {
    if (oneMonster) {
      dispatch(updateCurrentUser(oneMonster));
      /* navigation.navigate("MyPage"); */
    } else {
      console.error("MonsterProfilen hittades inte");
    }
  };
}
