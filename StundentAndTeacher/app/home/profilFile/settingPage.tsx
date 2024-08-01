import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Dimensions,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../../../assets/styles/App.style";
import { useLocalSearchParams } from "expo-router";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { iconColor } from "@/assets/styles/colors";
import { font2024 } from "@/assets/styles/fontSize";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
type TeacherProfileParams = {
  name: string;
  imageProfil: any;
  department: string;
  profil: string;
  detail: string;
  nameSurname: string;
  topBarBtn: string;
};

export default function EditProfile() {
  const { height, width } = Dimensions.get("window");
  const { name, imageProfil, department, profil, detail } =
    useLocalSearchParams<TeacherProfileParams>();

  const insets = useSafeAreaInsets();
  const [videoState, setVideoState] = useState(false);
  type typeRooter = {
    navigate: any;
    goBack: any;
  };
  const navigation = useNavigation<typeRooter>();
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
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
            height: "100%",
            padding: width * 0.03,
            paddingBottom: 0,
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              gap: width * 0.01,
              paddingBottom: width * 0.03,
            }}
          >
            <Image
              style={styles.imagesTeacherProfile}
              resizeMode="cover"
              source={imageProfil}
            />
            <Text style={styles.textNameTeacherProfil}>@{name}</Text>
            {profil != "student" ? (
              <>
                <Text style={styles.textNameTeacherProfil}>{department}</Text>
              </>
            ) : null}
            <Text style={styles.minimalTeacherProfil}>{detail}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonSeetingPage}
            onPress={() =>
              navigation.navigate("home/profilFile/informationProfil", {
                profil: profil,
              })
            }
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <FontAwesome5 name="user-alt" size={font2024} color={iconColor} />
              <Text style={styles.boldTextButton}>Hesap Bilgileri</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={font2024}
              color={iconColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSeetingPage}
            onPress={() =>
              navigation.navigate("home/profilFile/profilPassword", {
                profil: profil,
              })
            }
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <FontAwesome5 name="lock" size={font2024} color={iconColor} />
              <Text style={styles.boldTextButton}>Şifre İşlemleri</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={font2024}
              color={iconColor}
            />
          </TouchableOpacity>
          {profil == "student" ? (
            <>
              <TouchableOpacity style={styles.buttonSeetingPage}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <FontAwesome5
                    name="wallet"
                    size={font2024}
                    color={iconColor}
                  />
                  <Text style={styles.boldTextButton}>Üyelik İşlemleri</Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={font2024}
                  color={iconColor}
                />
              </TouchableOpacity>
            </>
          ) : null}
          <TouchableOpacity
            style={styles.buttonSeetingPage}
            onPress={() =>
              navigation.navigate("home/profilFile/notificationSetting", {
                profil: profil,
              })
            }
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <FontAwesome5
                name="concierge-bell"
                size={font2024}
                color={iconColor}
              />
              <Text style={styles.boldTextButton}>Bildirimler</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={font2024}
              color={iconColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSeetingPage}
            onPress={() => navigation.navigate("avatarFile/avatarMain")}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <FontAwesome5 name="smile" size={font2024} color={iconColor} />

              <Text style={styles.boldTextButton}>Avatarlar</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={font2024}
              color={iconColor}
            />
          </TouchableOpacity>
          {profil == "teacher" ? (
            <>
              <TouchableOpacity
                style={styles.buttonSeetingPage}
                onPress={() =>
                  navigation.navigate("home/profilFile/packetTeacher", {
                    profil: profil,
                  })
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <FontAwesome5
                    name="coins"
                    size={font2024}
                    color={iconColor}
                  />
                  <Text style={styles.boldTextButton}>
                    İçerik Üreticisi Ayarı
                  </Text>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={font2024}
                  color={iconColor}
                />
              </TouchableOpacity>
            </>
          ) : null}
          <TouchableOpacity
            style={styles.buttonSeetingPage}
            onPress={() => navigation.navigate("loginFile/login")}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <FontAwesome5
                name="sign-out-alt"
                size={font2024}
                color={iconColor}
              />

              <Text style={styles.boldTextButton}>Çıkış Yap</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={font2024}
              color={iconColor}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Toolbar selectMenu={profil == "another" ? 1 : 5} />
    </View>
  );
}
