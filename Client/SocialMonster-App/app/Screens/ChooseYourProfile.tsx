import { View, Text, StyleSheet, Pressable, StatusBar } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import UserIcon from "@/components/UserIcon";
import { useSetChoosenUser } from "@/hooks/useSetChoosenUser";
import CustomButton from "@/components/CustomButton";
import { GuestUser, OneMonster } from "@/types";
import { Image } from "expo-image";

type ChooseYourProfileProps = {
  setShowChooseYourProfile: (value: boolean) => void; // Funktion som tar en boolean och returnerar void
};

export default function ChooseYourProfile({
  setShowChooseYourProfile,
}: ChooseYourProfileProps) {
  //Hålla koll på klickat monster
  const [choosenMonster, setChoosenMonster] = useState<OneMonster | GuestUser>({
    id: 0,
    name: "GuestUser",
    age: 0,
    color: "none",
    image: "GuestUser.png",
  });

  //Använda egen Hook
  const setChoosenUser = useSetChoosenUser();

  //Hämta alla monster från monsterSlicen
  const monsterProfiles = useSelector((state: RootState) => state.monster);

  return (
    <View style={styles.container}>
      <View style={styles.topInfoContainer}>
        <Text style={styles.infoTextHeader}>Välj monster</Text>
      </View>

      <View style={styles.profilesContainer}>
        <View style={styles.profilesBox}>
          {monsterProfiles.map((monster) => {
            return (
              <Pressable
                key={monster.id}
                onPress={() => {
                  setChoosenUser(monster);
                  setChoosenMonster(monster);
                }}
              >
                <UserIcon
                  monsterImage={monster.image}
                  size="large"
                  choosen={choosenMonster.id === monster.id ? true : false}
                />
                <Text style={{ textAlign: "center" }}>{monster.name}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.btnContainer}>
        <CustomButton
          title="Logga in"
          color="primary"
          shape="square"
          size="large"
          onPress={() => setShowChooseYourProfile(false)}
        />
        <Text style={styles.infoText}>
          Du kan ändra monster i inloggat läge under monsterprofiler
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  imgStyle: {
    flex: 1, // Täcker hela föräldraview
    width: "100%",
    height: "100%",
    position: "absolute", // Gör att bilden fyller hela skärme
    backgroundColor: "#0553",
    opacity: 0.3,
  },
  topInfoContainer: {},
  infoTextHeader: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  profilesContainer: {},
  profilesBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
  },
  bottomInfoContainer: {},
  infoText: {
    fontSize: 13,
    textAlign: "center",
    paddingHorizontal: 50,
  },
});
