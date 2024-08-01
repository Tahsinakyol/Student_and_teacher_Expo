import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Dimensions, ScrollView, Image, Text } from "react-native";
import styles from "../../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function SuccessPage() {
  type typeRooter = {
    navigate: any;
  };
  const navigation = useNavigation<typeRooter>();
  type TeacherProfileParams = {
    banners: string;
  };
  const { banners } = useLocalSearchParams<TeacherProfileParams>();
  const insets = useSafeAreaInsets();
  const { height, width } = Dimensions.get("window");
  interface Data {
    id: number;
    point: number;
  }
  const data: Data[] = [
    {
      id: 1,
      point: 95,
    },
  ];
  for (let i = 1; i < 9; i++) {
    data.push({ id: data.length + 1, point: 100 - 10 * i });
  }
  for (let i = 1; i < 10; i++) {
    data.push({ id: data.length + 1, point: 10 });
  }
  return (
    <View
      style={[
        styles.mainTopView,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar style="dark" />
      <TopBar goBack={true} topBarName="Başarılar" rightBtn={banners} />
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ width: "100%", padding: width * 0.03 }}
        >
          <View style={styles.avatarTopSuccessPage}>
            <View style={styles.avatarGenerateTops}>
              <Image
                resizeMode="contain"
                style={styles.avatarImagescroolsPage}
                source={require("../../../assets/images/successAvatar/avatar1.png")}
              />
              <Text style={styles.avatarNameSc}>Sevim Yıldız</Text>
              <Text style={styles.avatarNameSc}>97 puan</Text>
            </View>
            <View style={[styles.avatarGenerateTops, { marginTop: -35 }]}>
              <Image
                resizeMode="contain"
                style={styles.avatarImagescroolsPage}
                source={require("../../../assets/images/successAvatar/avatar2.png")}
              />
              <Text style={styles.avatarNameSc}>Ada Yıldız</Text>
              <Text style={styles.avatarNameSc}>100 puan</Text>
            </View>
            <View style={styles.avatarGenerateTops}>
              <Image
                resizeMode="contain"
                style={styles.avatarImagescroolsPage}
                source={require("../../../assets/images/successAvatar/avatar3.png")}
              />
              <Text style={styles.avatarNameSc}>Tahsin Şahin</Text>
              <Text style={styles.avatarNameSc}>68 puan</Text>
            </View>
          </View>
          {data.map((item, index) => (
            <View style={styles.successList}>
              <Text style={styles.textDetailExpPdf}>
                {item.id} . Lorem Ipsum
              </Text>
              <Text style={styles.textDetailExpPdf}>{item.point} Puan</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <Toolbar selectMenu={1} />
    </View>
  );
}
