import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../../assets/styles/App.style";
import { font2024 } from "@/assets/styles/fontSize";
import {
  black,
  iconColor,
  online,
  orange,
  white,
} from "@/assets/styles/colors";
import { Entypo, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
export default function messageDetail() {
  type Params = {
    name: string;
    profilImage: any;
  };
  const {
    name = "Lorem Ipsum",
    profilImage = require("../../assets/images/users/1.jpg"),
  } = useLocalSearchParams<Params>();
  const [seeMessage, setSeeMessage] = useState<string>("");
  const [imageStatus, setImageStatus] = useState<boolean>(false);
  type typeRooter = {
    navigate: any;
    goBack: any;
  };
  const navigation = useNavigation<typeRooter>();
  const insets = useSafeAreaInsets();
  const { height, width } = Dimensions.get("window");
  interface Data {
    id: number;
    status: string;
    message: string;
    imageStatus: boolean;
  }

  const [data, setData] = useState<Data[]>([
    {
      id: 1,
      status: "sender",
      message: "Merhaba Tahsin App",
      imageStatus: false,
    },
    {
      id: 2,
      status: "receive",
      message: "Hoccammmm ben tüm ödevlerimi yaptım :D",
      imageStatus: false,
    },
    {
      id: 3,
      status: "receive",
      message: "Hoccammmm ben tüm ödevlerimi yaptım :D",
      imageStatus: false,
    },
    {
      id: 4,
      status: "receive",
      message: "Lorem Ipsum Sit Dolar",
      imageStatus: false,
    },
    {
      id: 5,
      status: "sender",
      message: "İyi Günler",
      imageStatus: false,
    },
  ]);
  const sendMessage = (seeMessage: string) => {
    let newImageStatus = false;
    if (image != null) {
      newImageStatus = true;
    }

    const newComment = {
      id: data.length + 1,
      status: "sender",
      message: newImageStatus ? "image" : seeMessage,
      imageStatus: newImageStatus,
    };

    setData([...data, newComment]);
    setSeeMessage("");
  };

  const reversedData = data.slice().reverse();
  const renderItem = ({ item }: { item: Data }) => {
    return (
      <View
        style={
          item.status != "sender" ? styles.senderMainMs : styles.receiveMainMs
        }
      >
        <StatusBar style="dark" />
        <View
          style={
            item.status != "sender"
              ? styles.messageBallSender
              : styles.messageBallReceive
          }
        >
          {item.imageStatus == false ? (
            <>
              <Text style={styles.textMessageDetail}>{item.message}</Text>
            </>
          ) : (
            <>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{
                    width: width * 0.5,
                    height: height * 0.2,
                    borderRadius: 10,
                  }}
                  resizeMode="cover"
                />
              )}
            </>
          )}
        </View>
      </View>
    );
  };
  // image start
  const [image, setImage] = useState<any>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  // image end
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        styles.mainTopView,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.messageTopDetail}>
        <TouchableOpacity
          style={styles.goBackButtonArrow}
          onPress={() => navigation.goBack("")}
        >
          <MaterialIcons
            name="arrow-back-ios-new"
            size={font2024}
            color={black}
          />
        </TouchableOpacity>
        <View>
          <Image
            resizeMode="cover"
            style={styles.MessageDetailImage}
            source={profilImage}
          />
          <View
            style={[
              styles.absloteAbootOnlineStatur,
              { backgroundColor: online },
            ]}
          ></View>
        </View>
        <Text style={styles.textMessageDetailName}>{name}</Text>
      </View>
      <View style={{ width: "100%", flex: 1 }}>
        <FlatList
          data={reversedData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: width * 0.03, gap: width * 0.03 }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            <Text style={styles.emmptyMessageText}>
              Hiç Mesajınız Bulunmuyor
            </Text>
          }
          inverted
        />
      </View>
      <View
        style={{
          width: "100%",
          padding: width * 0.03,
        }}
      >
        <View style={[styles.messageBottomSender]}>
          <TouchableOpacity
            style={styles.cameraButtonMessage}
            onPress={pickImage}
          >
            <Entypo name="camera" size={font2024} color={white} />
          </TouchableOpacity>
          <TextInput
            value={seeMessage}
            onChangeText={setSeeMessage}
            placeholderTextColor={iconColor}
            style={styles.messageInput}
          />
          <TouchableOpacity
            style={styles.cameraButtonMessageSecond}
            onPress={() => sendMessage(seeMessage)}
          >
            <Ionicons name="send" size={font2024} color={orange} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
