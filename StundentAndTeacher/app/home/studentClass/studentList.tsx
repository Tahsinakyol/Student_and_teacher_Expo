import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "../../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { Feather } from "@expo/vector-icons";
import { font2024 } from "@/assets/styles/fontSize";
import { black } from "@/assets/styles/colors";
import { StatusBar } from "expo-status-bar";
type TeacherProfileParams = {
  toolBarHead: string;
  profil: string;
};

export default function StudentList() {
  type typeRooter = {
    navigate: any;
  };
  const navigation = useNavigation<typeRooter>();
  const insets = useSafeAreaInsets();
  const { height, width } = Dimensions.get("window");
  interface Data {
    id: number;
  }
  const data: Data[] = [
    {
      id: 1,
    },
  ];
  for (let i = 1; i < 10; i++) {
    data.push({ id: data.length + 1 });
  }

  return (
    <View
      style={[
        styles.mainTopView,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar style="dark" />
      <TopBar goBack={true} topBarName="Öğrenciler" rightBtn="bar" />
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ width: "100%", padding: width * 0.03 }}
        >
          {data.map((item, index) => (
            <View style={styles.successList}>
              <Text style={styles.textDetailExpPdf}>
                {item.id} . Lorem Ipsum
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("home/messageDetail")}
              >
                <Feather name="message-square" size={font2024} color={black} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <Toolbar selectMenu={1} />
    </View>
  );
}
