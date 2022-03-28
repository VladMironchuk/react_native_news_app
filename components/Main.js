import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Modal,
} from "react-native";
import { useState } from "react";
import { gStyles } from "../styles/gStyles";
import { Ionicons } from "@expo/vector-icons";
import Form from "./Form";

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      fullText: "Google is cool!!",
      id: "Google",
      img: "https://pbs.twimg.com/profile_images/1072398951884697600/xLLyNSJL_400x400.jpg",
    },
    {
      name: "Facebook",
      anons: "Facebook!!!",
      fullText: "Facebook is cool!!",
      id: "Facebook",
      img: "https://sites.google.com/site/thebreteastonellisuniverse/_/rsrc/1462384721883/patrick-bateman/patrick-bateman-tinder-american-psycho.jpg?height=400&width=400",
    },
    {
      name: "Telegram",
      anons: "Telegram!!!",
      fullText: "Telegram is cool!!",
      id: "Telegram",
      img: "https://unrealitymag.com/wp-content/uploads/2014/11/sunglasses-e1415073233286.png",
    },
  ]);

  const [modalWindowIsVisible, setModalWindowIsVisible] = useState(false);

  const onAddArticle = (article) => {
    setNews((prevNews) => [
      ...prevNews,
      { ...article, key: Math.random().toString() },
    ]);
    setModalWindowIsVisible(false);
  };

  return (
    <View style={gStyles.main}>
      <Modal visible={modalWindowIsVisible}>
        <View style={gStyles.main}>
          <Ionicons
            name="close-circle"
            size={24}
            color="black"
            onPress={() => setModalWindowIsVisible(false)}
          />
          <Text style={styles.title}>Add Articles Form</Text>
          <Form onAddArticle={onAddArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle"
        size={24}
        color="black"
        onPress={() => setModalWindowIsVisible(true)}
      />
      <Text style={[gStyles.title, styles.header]}>Main Page</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfo", item)}
            key={item.id}
            style={styles.item}
          >
            <Image
              source={{
                width: "100%",
                height: 300,
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 30,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
});
