import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "../../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { useLocalSearchParams } from "expo-router";
import { iconColor, orange } from "@/assets/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { font2024 } from "@/assets/styles/fontSize";
export default function NotificationSetting() {
  const { profil } = useLocalSearchParams();
  const { height, width } = Dimensions.get("window");

  type typeRooter = {
    navigate: any;
    goBack: any;
  };
  const navigation = useNavigation<typeRooter>();

  const insets = useSafeAreaInsets();

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
            İçerik Üreticisi Ayarları
          </Text>
          <View
            style={{
              width: "100%",
              paddingVertical: width * 0.03,
              borderBottomWidth: 1,
              borderBottomColor: iconColor,
              gap: width * 0.03,
            }}
          >
            <Text style={styles.headerTextHead}>Analizler</Text>
            <View
              style={{ width: "100%", flexDirection: "row", gap: width * 0.03 }}
            >
              <View style={styles.cardPacketTeacher}>
                <Text style={styles.fontTextCardPacket}>1562</Text>
                <Text style={styles.textSecondPackedDetail}>
                  Gönderi İzlenme Sayısı
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={30}
                    color={orange}
                  />
                  <Text style={styles.textSecondPackedDetail}>%68</Text>
                </View>
              </View>
              <View style={styles.cardPacketTeacher}>
                <Text style={styles.fontTextCardPacket}>68</Text>
                <Text style={styles.textSecondPackedDetail}>Gelen Takipçi</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={30}
                    color={orange}
                  />
                  <Text style={styles.textSecondPackedDetail}>%68</Text>
                </View>
              </View>
              <View style={styles.cardPacketTeacher}>
                <Text style={styles.fontTextCardPacket}>686</Text>
                <Text style={styles.textSecondPackedDetail}>Beğeni</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={30}
                    color={orange}
                  />
                  <Text style={styles.textSecondPackedDetail}>%68</Text>
                </View>
              </View>
            </View>
            <View style={styles.lineShareGenerate}>
              <Text style={styles.textSecondPackedDetail}>Son Gönderi</Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              >
                <Entypo
                  name="controller-play"
                  size={font2024}
                  color={iconColor}
                />
                <Text style={styles.textSecondPackedDetail}>686</Text>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              >
                <Entypo name="heart" size={font2024} color={iconColor} />
                <Text style={styles.textSecondPackedDetail}>1562</Text>
              </View>
            </View>
          </View>
          <View style={{ paddingVertical: width * 0.03 }}>
            <Text style={styles.headerTextHead}>Para Kazanma</Text>
            <View style={styles.priceCardGenerate}>
              <Text style={styles.boldTextPrice}>0.00 ₺</Text>
              <Text style={styles.textDetailBottomTeaacherCard}>
                Son 7 gün içinde kazanılan para
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      <Toolbar selectMenu={profil == "another" ? 1 : 5} />
    </View>
  );
}
