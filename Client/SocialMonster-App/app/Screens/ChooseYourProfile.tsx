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
      <StatusBar backgroundColor={"#00E1D3"} />
      <Image
        source={require("../../assets/images/chooseAProfileImg.jpeg")}
        style={styles.imgStyle}
        contentFit="cover"
        allowDownscaling={true}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoTextHeader}>Välj monster</Text>
        <Text style={styles.infoText}>
          Du kan ändra monster i inloggat läge under monsterprofiler
        </Text>
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
          title="Välj och gå vidare"
          color="primary"
          shape="square"
          size="large"
          onPress={() => setShowChooseYourProfile(false)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 50,
    backgroundColor: "#00E1D3",
  },
  imgStyle: {
    flex: 1, // Täcker hela föräldraview
    width: "100%",
    height: "100%",
    position: "absolute", // Gör att bilden fyller hela skärme
    backgroundColor: "#0553",
    opacity: 0.3,
  },
  infoContainer: {
    alignItems: "center",
    gap: 10,
  },
  infoTextHeader: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 20,
    textAlign: "center",
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
  },
});
