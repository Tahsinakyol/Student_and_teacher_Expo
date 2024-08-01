import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Dimensions, TouchableOpacity } from "react-native";
import styles from "../../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome6 } from "@expo/vector-icons";
import { white } from "@/assets/styles/colors";
import { font3640 } from "@/assets/styles/fontSize";
export default function Student_uploadHomeWork() {
  type typeRooter = {
    navigate: any;
  };
  const navigation = useNavigation<typeRooter>();

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
      <TopBar goBack={true} topBarName={"Ödevler"} />
      <View
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.buttonCenterPlusOrange}>
          <FontAwesome6 name="plus" size={font3640} color={white} />
        </TouchableOpacity>
      </View>
      <Toolbar selectMenu={1} />
    </View>
  );
}
