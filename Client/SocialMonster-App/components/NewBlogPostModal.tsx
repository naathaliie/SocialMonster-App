import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Modal, Portal, Text, TextInput } from "react-native-paper";
import CustomButton from "./CustomButton";
import { onePost } from "@/types";
import { useDispatch } from "react-redux";
import { addPost } from "@/redux/postSlice";

/**********PLACERA DENNA MODAL FRISTÅENDE LÄNGST UPP I KOMPONENTEN DU VILL ANVÄNDA DEN I (INTE INUTI TEX EN <VIEW></VIEW>)**********/

type NewBlogPostModalProps = {
  authorId: number;
  position: "left" | "right";
};

export default function NewBlogPostModal({
  authorId,
  position,
}: NewBlogPostModalProps) {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [bodyText, setBodyText] = React.useState("");
  const [titleText, setTitleText] = React.useState("");

  //För att komma åt addPost från postSlice
  const dispatch = useDispatch();

  //tillfällig idgenerator
  const IDgenerator = React.useRef(100);

  function postNewPost() {
    const newPost: onePost = {
      id: IDgenerator.current + 1,
      author: authorId,
      title: titleText,
      bodyText: bodyText,
    };

    dispatch(addPost(newPost));
  }

  return (
    <View
      style={position === "left" ? styles.containerLeft : styles.containerRight}
    >
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
        >
          <View style={styles.exitBtn}>
            <CustomButton
              title="X"
              color="primary"
              shape="round"
              size="xs"
              onPress={() => {
                hideModal();
                console.log("stäng");
              }}
            />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>Här skriver du ett nytt inlägg</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              label="Titel"
              value={titleText}
              onChangeText={(text) => setTitleText(text)}
            />
            <TextInput
              label="Blogginlägg"
              value={bodyText}
              multiline={true}
              style={{ height: 100 }}
              onChangeText={(text) => setBodyText(text)}
            />
          </View>
          <View style={styles.btncontainer}>
            <CustomButton
              title="Spara"
              color="primary"
              shape="square"
              size="small"
              onPress={() => {
                console.log("Klickat på spara post knappen");
                postNewPost();
              }}
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
  containerLeft: {
    //Container stylar endast området runt knappen på sidan som den visas samt placering i föräldrakomponenten här: till vänster
    position: "absolute",
    top: "90%",
    left: "0%",
  },
  containerRight: {
    //här: till höger
    position: "absolute",
    top: "90%",
    right: "0%",
    zIndex: 10, // Högre zIndex för att knappen ska vara överst alla förälderns andra barnkomponenter (annars hamnar den under)
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    width: "90%",
    height: "80%",
    alignSelf: "center", // Centrera modalen horisontellt
  },
  exitBtn: {
    position: "absolute",
    top: "2%",
    left: "90%",
  },
  infoTextContainer: {
    marginBottom: 25,
    alignSelf: "flex-start",
  },
  infoText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  inputContainer: {
    gap: 10,
  },
  modalBtn: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  btncontainer: {
    alignSelf: "center",
  },
});
