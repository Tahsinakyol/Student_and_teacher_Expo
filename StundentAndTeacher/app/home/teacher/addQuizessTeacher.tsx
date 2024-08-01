import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "../../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";
import { black, iconColor } from "@/assets/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { font131517 } from "@/assets/styles/fontSize";
import { StatusBar } from "expo-status-bar";
export default function AddQuizessTeacher() {
  interface GeneralResponse {
    globalEmail: string;
  }
  interface RootState {
    GeneralResponse: GeneralResponse;
  }
  const { GeneralResponse } = useSelector((state: RootState) => state);
  type typeRooter = {
    navigate: any;
    goBack: any;
  };
  const navigation = useNavigation<typeRooter>();

  const insets = useSafeAreaInsets();
  const { height, width } = Dimensions.get("window");

  const messageGoBack = () => {
    showMessage({
      message: "Başarılı !",
      description: "Quiz Yükleme İşlemi Başarılı !",
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
    navigation.goBack("");
  };
  return (
    <View
      style={[
        styles.mainTopView,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar style="dark" />
      <TopBar goBack={true} topBarName="Quiz Ekle" rightBtn={"nully"} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ width: "100%", flex: 1, padding: width * 0.03 }}
      >
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: width * 0.03 }}
        >
          <View style={styles.quizMainCardGenerate}>
            <View style={styles.headerCardQuisesCard}>
              <View style={styles.headerCardQuisesCardFirst}>
                <Text style={styles.headerCardQuisesCardFirstText}>Konu</Text>
              </View>
              <TextInput
                style={styles.inputAddQuizses}
                placeholder="Lütfen Konu Başlığını Yazınız"
                placeholderTextColor={iconColor}
                multiline
              />
            </View>
            <View style={styles.headerCardQuisesCard}>
              <View style={styles.headerCardQuisesCardFirst}>
                <Text style={styles.headerCardQuisesCardFirstText}>Soru</Text>
              </View>
              <TextInput
                style={styles.inputAddQuizses}
                placeholder="Lütfen Soruyu Yazınız"
                placeholderTextColor={iconColor}
                multiline
              />
            </View>
            <View style={{ width: "100%", flex: 1 }}>
              <View style={styles.headerCardQuisesCardFirst}>
                <Text style={styles.headerCardQuisesCardFirstText}>
                  Seçenekler
                </Text>
              </View>
              <View style={{ width: "100%", flex: 1 }}>
                <View style={styles.chooseAnsVersınput}>
                  <View style={styles.leftWordButton}>
                    <Text style={styles.headerCardQuisesCardFirstText}>A</Text>
                  </View>

                  <TextInput
                    style={styles.inputBottomAddQuizes}
                    placeholder="Cevap Yazınız"
                    placeholderTextColor={iconColor}
                  />
                </View>
                <View style={styles.chooseAnsVersınput}>
                  <View style={styles.leftWordButton}>
                    <Text style={styles.headerCardQuisesCardFirstText}>B</Text>
                  </View>

                  <TextInput
                    style={styles.inputBottomAddQuizes}
                    placeholder="Cevap Yazınız"
                    placeholderTextColor={iconColor}
                  />
                </View>
                <View style={styles.chooseAnsVersınput}>
                  <View style={styles.leftWordButton}>
                    <Text style={styles.headerCardQuisesCardFirstText}>C</Text>
                  </View>

                  <TextInput
                    style={styles.inputBottomAddQuizes}
                    placeholder="Cevap Yazınız"
                    placeholderTextColor={iconColor}
                  />
                </View>
                <View style={styles.chooseAnsVersınput}>
                  <View style={styles.leftWordButton}>
                    <Text style={styles.headerCardQuisesCardFirstText}>D</Text>
                  </View>

                  <TextInput
                    style={styles.inputBottomAddQuizes}
                    placeholder="Cevap Yazınız"
                    placeholderTextColor={iconColor}
                  />
                </View>
                <View style={styles.chooseAnsVersınput}>
                  <View style={styles.leftWordButton}>
                    <Text style={styles.headerCardQuisesCardFirstText}>E</Text>
                  </View>

                  <TextInput
                    style={styles.inputBottomAddQuizes}
                    placeholder="Cevap Yazınız"
                    placeholderTextColor={iconColor}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={{ paddingHorizontal: 15 }}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text style={{ fontSize: font131517, color: black }}>1</Text>
            <TouchableOpacity style={{ padding: 15 }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: width * 0.03,
            }}
          >
            <TouchableOpacity
              style={[styles.btnOrangeAddClass, { width: "50%" }]}
              onPress={messageGoBack}
            >
              <Text style={styles.whiteTextForOrangeButton70}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Toolbar selectMenu={2} />
    </View>
  );
}
