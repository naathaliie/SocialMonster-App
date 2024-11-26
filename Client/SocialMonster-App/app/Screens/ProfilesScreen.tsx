import UserIcon from "@/components/UserIcon";
import { RootState } from "../../redux/store";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentUser } from "@/redux/currentUserSlice";

export default function ProfileScreen() {
  //Hämta alla monster från monsterSlicen
  const monsterProfiles = useSelector((state: RootState) => state.monster);

  //Hämta currentuser
  const currentUser = useSelector((state: RootState) => state.currentuser);

  // Skapa dispatch för att kunna använda reducers från slicenn
  const dispatch = useDispatch();

  //Funktion för att sätta klickad user till CurrentUser
  function setCurrentUser(id: number) {
    //Sortera ut det klickade monstret
    const newCurrentUser = monsterProfiles.find((monster) => {
      return monster.id === id;
    });

    if (newCurrentUser) {
      //sätter det klickade monstret som currentUser
      dispatch(updateCurrentUser(newCurrentUser));
    } else {
      console.error(`MonsterProfil med id: ${id}, hittades inte`);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Välj ett monster</Text>
        <Text style={{ textAlign: "center" }}>
          Du är inloggad som: {currentUser.name}
        </Text>
      </View>

      <View style={styles.profilesContainer}>
        {monsterProfiles.map((monster) => {
          return (
            <Pressable
              key={monster.id}
              onPress={() => setCurrentUser(monster.id)}
            >
              <UserIcon monsterImage={monster.image} size="large" />
              <Text style={{ textAlign: "center" }}>{monster.name}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    gap: 10,
  },
  infoBox: {
    padding: 10,
    marginBottom: 50,
    height: "25%",
    width: "100%",
    justifyContent: "center",
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
  },
  profilesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
});
