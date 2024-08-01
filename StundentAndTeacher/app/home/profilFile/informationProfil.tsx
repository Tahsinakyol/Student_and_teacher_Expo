import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import styles from "../../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { iconColor } from "@/assets/styles/colors";
import { showMessage } from "react-native-flash-message";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";

export default function InformationProfil() {
  const { profil } = useLocalSearchParams();
  const { height, width } = Dimensions.get("window");
  type typeRooter = {
    navigate: any;
    goBack: any;
  };
  const navigation = useNavigation<typeRooter>();

  const insets = useSafeAreaInsets();

  const saveProfilInfo = () => {
    showMessage({
      message: "Başarılı !",
      description: "Hesap Bilgileriniz Güncellenmiştir !",
      icon: (props: any) => (
        <AntDesign
          name="checkcircleo"
          size={32}
          color="#fff"
          style={{ marginRight: 15 }}
        />
      ),
      type: "simpleMessage" as never,
    });
    setTimeout(() => {
      navigation.goBack("");
    }, 2000);
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
            height: "100%",
            padding: width * 0.03,
            paddingBottom: 0,
          }}
        >
          <Text style={styles.textHeaderNameEditProfile}>Hesap Bilgileri</Text>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%", gap: width * 0.03 }}>
              <TextInput
                style={styles.inputEditPage}
                placeholder="isim Soyisim"
                placeholderTextColor={iconColor}
              />
              <TextInput
                style={styles.inputEditPage}
                placeholder="E Posta Adresi"
                placeholderTextColor={iconColor}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.inputEditPage}
                placeholder="Telefon Numarası"
                placeholderTextColor={iconColor}
                keyboardType="numeric"
              />
              {profil == "teacher" ? (
                <>
                  <TextInput
                    style={styles.inputEditPage}
                    placeholder="Uzmanlık Alanı"
                    placeholderTextColor={iconColor}
                  />
                  <TextInput
                    style={styles.inputEditPage}
                    placeholder="Eğitim Bilgisi"
                    placeholderTextColor={iconColor}
                  />
                </>
              ) : null}
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={styles.orangeButtonBge}
                  onPress={saveProfilInfo}
                >
                  <Text style={styles.orangeButtonBgeText}>
                    Bilgileri Güncelle
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Toolbar selectMenu={profil == "another" ? 1 : 5} />
    </View>
  );
}
