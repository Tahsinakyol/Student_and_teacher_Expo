import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from "react-native";
import styles from "../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { font2024 } from "@/assets/styles/fontSize";
import { gray } from "@/assets/styles/colors";
import { StatusBar } from "expo-status-bar";
export default function Notification() {
  interface GeneralResponse {
    globalEmail: string;
  }
  interface RootState {
    GeneralResponse: GeneralResponse;
  }
  const { GeneralResponse } = useSelector((state: RootState) => state);
  type typeRooter = {
    navigate: any;
  };

  const navigation = useNavigation<typeRooter>();

  const insets = useSafeAreaInsets();
  const [videoState, setVideoState] = useState(false);
  const { height, width } = Dimensions.get("window");
  interface Data {
    id: number;
  }
  const data: Data[] = [{ id: 1 }];
  const renderItem = ({ item }: { item: Data }) => {
    return (
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.navigate("home/messageDetail")}
      >
        <Image
          source={require("../../assets/images/users/2.jpg")}
          resizeMode="cover"
          style={styles.imageGenerate}
        />
        <Text style={styles.textCenterMessage}>Lorem Ipsum</Text>
      </TouchableOpacity>
    );
  };
  for (let i: number = 1; i < 20; i++) {
    data.push({ id: data.length + 1 });
  }
  interface DataSecond {
    id: number;
  }
  const dataSecond: DataSecond[] = [{ id: 1 }];
  const renderItemSecond = ({ item }: { item: Data }) => {
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onPress={() => navigation.navigate("home/messageDetail")}
      >
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Image
            source={require("../../assets/images/users/2.jpg")}
            resizeMode="cover"
            style={styles.imageGenerate}
          />
          <Text style={styles.textCenterMessage}>Lorem Ipsum</Text>
        </View>
        <Ionicons name="send-outline" size={font2024} color={gray} />
      </TouchableOpacity>
    );
  };
  for (let i: number = 1; i < 20; i++) {
    dataSecond.push({ id: data.length + 1 });
  }
  return (
    <View
      style={[
        styles.mainTopView,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar style="dark" />
      <TopBar goBack={false} topBarName="Mesajlar" rightBtn={"nully"} />
      <View style={{ width: "100%", flex: 1, padding: width * 0.03 }}>
        <View style={{ width: "100%" }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: width * 0.03, marginBottom: 15 }}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <Text style={[styles.textNameHeaderHw, { marginBottom: 15 }]}>
          Son Sohbetler
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: width * 0.03, marginBottom: 15 }}
          data={dataSecond}
          renderItem={renderItemSecond}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <Toolbar selectMenu={4} />
    </View>
  );
}
