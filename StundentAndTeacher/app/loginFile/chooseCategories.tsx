import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from "react-native";
import styles from "../../assets/styles/App.style";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  black,
  iconColor,
  secGradiend1,
  secGradiend2,
  secGradiend3,
  white,
} from "@/assets/styles/colors";
import { font131517 } from "@/assets/styles/fontSize";
import { Select } from "native-base";
import SelectComp from "../components/select";
import { LinearGradient } from "expo-linear-gradient";
type TeacherProfileParams = {
  name: string;
  imageProfil: any;
  department: string;
  profil: string;
  detail: string;
  nameSurname: string;
  topBarBtn: string;
};
export default function ChooseCategories() {
  type typeRooter = {
    navigate: any;
    goBack: any;
  };
  const navigation = useNavigation<typeRooter>();

  const insets = useSafeAreaInsets();
  const [videoState, setVideoState] = useState(false);
  const { height, width } = Dimensions.get("window");
  const [clickState, setClickState] = useState(1);
  const [namedState, setNamedState] = useState("Matematik");
  type cardIcon = {
    id: number;
    image: object;
    name: string;
  };
  const data: cardIcon[] = [
    {
      id: 1,
      image: require("../../assets/images/studentChooseFile/studentChooseIcon1.png"),
      name: "Matematik",
    },
    {
      id: 2,
      image: require("../../assets/images/studentChooseFile/studentChoose2.png"),
      name: "Türk Dili ve Edebiyatı",
    },
    {
      id: 3,
      image: require("../../assets/images/studentChooseFile/studentChoose3.png"),
      name: "Fizik",
    },
    {
      id: 4,
      image: require("../../assets/images/studentChooseFile/studentChoose4.png"),
      name: "Biyoloji",
    },
    {
      id: 5,
      image: require("../../assets/images/studentChooseFile/studentChoose5.png"),
      name: "Kimya",
    },
    {
      id: 6,
      image: require("../../assets/images/studentChooseFile/studentChoose6.png"),
      name: "Coğrafya",
    },
    {
      id: 7,
      image: require("../../assets/images/studentChooseFile/studentChoose7.png"),
      name: "Tarih",
    },
    {
      id: 8,
      image: require("../../assets/images/studentChooseFile/studentChoose8.png"),
      name: "Sanat Tarihi",
    },
  ];
  const renderItem = ({ item }: { item: cardIcon }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setClickState(item.id), setNamedState(item.name);
        }}
        style={{
          width: width * 0.5,
          padding: width * 0.03,
          paddingLeft: item.id % 2 === 0 ? 0 : undefined,
          paddingBottom: 0,
        }}
      >
        <LinearGradient
          style={{
            width: "100%",
            height: 130,
            padding: 5,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: iconColor,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
          }}
          colors={
            clickState == item.id
              ? [secGradiend1, secGradiend2, secGradiend3]
              : [white, white]
          }
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              width: "100%",
              height: "100%",
              borderRadius: 10,
              gap: 5,
            }}
          >
            <Image
              style={{ width: "50%", height: "50%" }}
              resizeMode="contain"
              source={item.image}
            />
            <Text style={{ fontSize: font131517, color: black }}>
              {item.name}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={[
        styles.mainTopView,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar style="dark" />
      <View style={styles.viewTopChooseCategories}>
        <TouchableOpacity
          onPress={() => navigation.goBack("")}
          style={{ width: 40, height: 50, justifyContent: "center" }}
        >
          <SimpleLineIcons name="arrow-left" size={font131517} color={black} />
        </TouchableOpacity>
        <Text style={{ color: black, fontSize: font131517, fontWeight: "600" }}>
          Ders Seç
        </Text>
      </View>
      <View style={{ width: "100%", flex: 1 }}>
        <View
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <View style={{ padding: width * 0.03 }}>
            <SelectComp holder="Sınıf Seç">
              <Select.Item label="item" value="" />
            </SelectComp>
          </View>
          <View style={{ width: "100%", flex: 1 }}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              numColumns={2}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          padding: width * 0.03,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={styles.buttonClickedCooseCategories}
          onPress={() =>
            navigation.navigate("loginFile/ChooseIndroduce", {
              slug: namedState,
            })
          }
        >
          <Text style={{ color: white, fontSize: font131517 }}>Devam Et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
