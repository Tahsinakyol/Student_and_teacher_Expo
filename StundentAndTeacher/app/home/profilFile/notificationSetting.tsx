import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styles from "../../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { useLocalSearchParams } from "expo-router";
import { font131517 } from "@/assets/styles/fontSize";
import { black } from "@/assets/styles/colors";
export default function NotificationSetting() {
  const { profil }: { profil: string } = useLocalSearchParams();
  const { height, width } = Dimensions.get("window");

  type typeRooter = {
    navigate: any;
    goBack: any;
  };
  const navigation = useNavigation<typeRooter>();

  const insets = useSafeAreaInsets();
  type Tahsin = {
    id: number;
    name: string;
  };

  const data: Tahsin[] = [
    { id: 1, name: "Sound" },
    { id: 2, name: "Vibrate" },
    { id: 3, name: "General Notification" },
    { id: 3, name: "Payment Options" },
  ];
  const [switchStates, setSwitchStates] = useState<boolean[]>(
    Array(data.length).fill(false)
  );

  const toggleSwitch = (index: number) => {
    const newSwitchStates = [...switchStates];
    newSwitchStates[index] = !newSwitchStates[index];
    setSwitchStates(newSwitchStates);
  };

  const renderItem = ({ item, index }: { item: Tahsin; index: number }) => {
    return (
      <View style={styles.notificationSettingMain}>
        <Text style={{ fontSize: font131517, color: black }}>
          {item.name.trim()}
        </Text>
        <View style={styles.swichedManuel}>
          <TouchableOpacity
            style={
              switchStates[index]
                ? styles.leftMainSwiched
                : [styles.leftMainSwiched, { justifyContent: "flex-end" }]
            }
            onPress={() => toggleSwitch(index)}
          >
            <View style={styles.leftMainSwichedCircle}></View>
          </TouchableOpacity>
        </View>
      </View>
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
      <TopBar
        goBack={true}
        topBarName={"Ayarlar"}
        rightBtn={"ellipsizeProfil"}
      />
      <KeyboardAvoidingView
        style={{ width: "100%", flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            padding: width * 0.03,
            paddingBottom: 0,
          }}
        >
          <Text style={styles.textHeaderNameEditProfile}>
            Bildirim Ayarları
          </Text>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <View style={{ width: "100%", gap: width * 0.03, height: "100%" }}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      <Toolbar selectMenu={profil == "another" ? 1 : 5} />
    </View>
  );
}
