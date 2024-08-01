import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import styles from "../../assets/styles/App.style";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SimpleLineIcons } from "@expo/vector-icons";
import { black, white } from "@/assets/styles/colors";
import { font131517 } from "@/assets/styles/fontSize";
import LectureChoose from "../components/chooseChecked";
export default function ChooseCategories() {
  type typeRooter = {
    navigate: any;
    goBack: any;
  };
  type paramsType = {
    slug: string;
  };
  const navigation = useNavigation<typeRooter>();
  const { slug } = useLocalSearchParams<paramsType>();
  const insets = useSafeAreaInsets();
  const [videoState, setVideoState] = useState(false);
  const { height, width } = Dimensions.get("window");

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
          Konuları Seç
        </Text>
      </View>
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
            height: "100%",
            padding: width * 0.03,
            gap: width * 0.03,
          }}
        >
          <Text
            style={{ fontWeight: "600", fontSize: font131517, color: black }}
          >
            {slug}
          </Text>
          <LectureChoose label="Lorem Ipsum" />
          <LectureChoose label="Lorem Ipsum" />
          <Text
            style={{ fontWeight: "600", fontSize: font131517, color: black }}
          >
            Konu Başlığı
          </Text>
          <LectureChoose label="Lorem Ipsum" />
          <LectureChoose label="Lorem Ipsum" />
          <LectureChoose label="Lorem Ipsum" />
          <LectureChoose label="Lorem Ipsum" />
          <LectureChoose label="Lorem Ipsum" />
        </ScrollView>
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
            onPress={() => navigation.navigate("home/homePage")}
          >
            <Text style={{ color: white, fontSize: font131517 }}>Devam Et</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
