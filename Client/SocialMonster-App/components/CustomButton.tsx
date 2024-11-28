import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

type CustomButtonProps = {
  title: string;
  color: "primary" | "secondary";
  shape: "square" | "round";
  size: "xs" | "small" | "large";
  onPress: () => void;
};

export default function CustomButton({
  title,
  color,
  shape,
  size,
  onPress,
}: CustomButtonProps) {
  // Bestäm stilen baserat på props
  const buttonStyle = [
    styles.baseButton, // Grundläggande stil för knappen
    styles[color], // Dynamisk färg baserat på props
    styles[shape], // Dynamisk form baserat på props
    styles[size], // Dynamisk storlek baserat på props
  ];

  return (
    <View>
      <Pressable
        onPress={() => {
          onPress();
        }}
        style={buttonStyle}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  // Grundläggande stil för knappen
  baseButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
  },
  // Stilar för färger
  primary: {
    backgroundColor: "#08AEAD", // Exempel på primärfärg
  },
  secondary: {
    backgroundColor: "#6c757d", // Exempel på sekundärfärg
  },
  // Stilar för form
  square: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "cyan",
  },
  round: {
    borderRadius: 100, // Ger rundad form
  },
  // Stilar för storlek
  xs: {
    width: 50,
    height: 30,
  },
  small: {
    paddingHorizontal: 15,
    height: 50,
    width: 100,
  },
  large: {
    width: 150,
    height: 70,
  },
  // Textstil
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
