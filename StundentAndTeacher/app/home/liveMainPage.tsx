import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  Animated,
  Easing,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "../../assets/styles/App.style";
import { useSelector } from "react-redux";
import { black, iconColor, white } from "@/assets/styles/colors";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { font1216, font131517, font2024 } from "@/assets/styles/fontSize";
import { Feather } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";
export default function LiveMainPaage() {
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
  const [tabLive, setTabLive] = useState(1);
  const spinValue = new Animated.Value(0);

  const handlePressIn = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const handlePressOut = () => {
    spinValue.stopAnimation();
    spinValue.setValue(0);
    setMainTab(true);
  };
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const [mainTab, setMainTab] = useState(false);
  const shared = () => {
    showMessage({
      message: "Başarılı !",
      description: "Gönderi Paylaşıldı !",
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
      setMainTab(false);
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        styles.mainTopView,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          backgroundColor: black,
        },
      ]}
    >
      <StatusBar style="light" />
      {mainTab == false ? (
        <>
          <View style={{ width: "100%", flex: 1 }}>
            {/* video alanı gelecek */}
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/images/system/cameraTest.png")}
              resizeMode="cover"
            />
            <View style={styles.livePageDetail}>
              <View style={styles.livePageTopMain}>
                <View style={styles.timeTopLivePage}></View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity onPress={() => navigation.goBack("")}>
                    <FontAwesome name="times" size={32} color={white} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.arrowLivePage}
                    onPress={() => setMainTab(true)}
                  >
                    <AntDesign name="arrowright" size={24} color={white} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.bottomRecoredLive}>
                <View style={styles.centerButtonLiveFlexible}>
                  <TouchableOpacity style={styles.buttonFlexibleIcons}>
                    <Ionicons
                      name="camera-reverse-outline"
                      size={font2024}
                      color={white}
                    />
                    <Text style={styles.iconTextLivePage}>Çevir</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.centerButtonLiveFlexible}>
                  <TouchableOpacity
                    style={[
                      styles.buttonLivePageSave,
                      { transform: [{ rotate: spin }] },
                    ]}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                  >
                    <View style={[styles.buttonLivePageSaveInReal]}></View>
                  </TouchableOpacity>
                </View>
                <View style={styles.centerButtonLiveFlexible}>
                  <TouchableOpacity style={styles.buttonFlexibleIcons}>
                    <Feather name="image" size={font2024} color={white} />
                    <Text style={styles.iconTextLivePage}>Galeri</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* video alanı gelecek end */}
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              width: "100%",
              flex: 1,
              padding: width * 0.03,
              gap: width * 0.03,
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => setMainTab(false)}>
                <FontAwesome name="times" size={32} color={white} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.orangeButtonShare}
                onPress={shared}
              >
                <Text style={{ fontSize: font1216, color: white }}>
                  Gönderiyi Paylaş
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%", flex: 1 }}>
              <Image
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
                source={require("../../assets/images/system/shareIm.png")}
                resizeMode="cover"
              />
            </View>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: font131517,
              }}
            >
              {tabLive === 4 ? "60 sn" : tabLive === 3 ? "30 sn" : "15 sn"}
            </Text>
            <View style={{ width: "100%" }}>
              <TextInput
                placeholderTextColor={iconColor}
                placeholder="Açıklama Ekle"
                multiline
                numberOfLines={4}
                style={styles.inpuGraysShared}
              />
            </View>
          </View>
        </>
      )}
      {/* live page toolbar start */}
      <View style={styles.livePageBottomToolbar}>
        <TouchableOpacity
          style={
            tabLive == 4
              ? styles.buttonPaddingLiveToolbar
              : [styles.buttonPaddingLiveToolbar, { opacity: 0.5 }]
          }
          onPress={() => setTabLive(4)}
        >
          <Text style={styles.whiteTextGenerate}>60 sn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            tabLive == 3
              ? styles.buttonPaddingLiveToolbar
              : [styles.buttonPaddingLiveToolbar, { opacity: 0.5 }]
          }
          onPress={() => setTabLive(3)}
        >
          <Text style={styles.whiteTextGenerate}>30 sn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            tabLive == 2
              ? styles.buttonPaddingLiveToolbar
              : [styles.buttonPaddingLiveToolbar, { opacity: 0.5 }]
          }
          onPress={() => setTabLive(2)}
        >
          <Text style={styles.whiteTextGenerate}>15 sn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            tabLive == 1
              ? styles.buttonPaddingLiveToolbar
              : [styles.buttonPaddingLiveToolbar, { opacity: 0.5 }]
          }
          onPress={() => setTabLive(1)}
        >
          <Text style={styles.whiteTextGenerate}>Canlı Yayın</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
