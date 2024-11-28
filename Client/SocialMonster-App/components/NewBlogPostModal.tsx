import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Modal, Portal, Text, TextInput } from "react-native-paper";
import CustomButton from "./CustomButton";

export default function NewBlogPostModal() {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}
        >
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>Här skriver du ett nytt inlägg</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              label="Titel"
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <TextInput
              label="Handling"
              value={text}
              onChangeText={(text) => setText(text)}
            />
          </View>
        </Modal>
      </Portal>

      <CustomButton
        title="+"
        color="primary"
        shape="round"
        size="xs"
        onPress={showModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
    width: "90%",
    height: "80%",
    alignSelf: "center", // Centrera modalen horisontellt
    justifyContent: "center", // Centrera modalen vertikalt
  },
  infoTextContainer: {
    marginBottom: 15,
  },
  infoText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    gap: 10,
  },
  modalBtn: {
    borderRadius: 100,
    backgroundColor: "yellow",
    width: 50,
    height: 50,
  },
});
