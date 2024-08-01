import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Dimensions, Image } from "react-native";
import styles from "../../../assets/styles/App.style";
import { useLocalSearchParams } from "expo-router";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
type TeacherProfileParams = {
  toolBarHead: string;
  profil: string;
};

export default function ClassDetail() {
  type typeRooter = {
    navigate: any;
  };
  const navigation = useNavigation<typeRooter>();
  const insets = useSafeAreaInsets();
  const [videoState, setVideoState] = useState(false);
  const { height, width } = Dimensions.get("window");
  const { toolBarHead, profil } = useLocalSearchParams<TeacherProfileParams>();

  return (
    <View
      style={[
        styles.mainTopView,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar style="dark" />
      <TopBar goBack={true} topBarName={toolBarHead} rightBtn="bar" />
      <View
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../../../assets/images/system/bgeVideo.png")}
          resizeMode="cover"
        />
      </View>
      <Toolbar selectMenu={2} />
    </View>
  );
}
