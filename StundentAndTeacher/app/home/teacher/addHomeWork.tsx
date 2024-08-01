import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "../../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { useSelector } from "react-redux";
import { iconColor, white } from "@/assets/styles/colors";
import { AntDesign } from "@expo/vector-icons";
import { font2024 } from "@/assets/styles/fontSize";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { StatusBar } from "expo-status-bar";
export default function AddHomeWork() {
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
  const [image, setImage]: any = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const messageGoBack = () => {
    showMessage({
      message: "Başarılı !",
      description: "Ödev Yükleme İşlemi Başarılı !",
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
      <TopBar goBack={true} topBarName="Ödev Ekle" rightBtn={"nully"} />
      <View style={{ width: "100%", flex: 1, padding: width * 0.03 }}>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: width * 0.03 }}
        >
          <Text style={[styles.nameInputTopText, { fontWeight: "600" }]}>
            Ödev İçeriği
          </Text>
          <TextInput
            style={styles.addInputUploadHomeWork}
            placeholderTextColor={iconColor}
            placeholder="Ödev İçeriği"
          />
          <Text style={[styles.nameInputTopText, { fontWeight: "600" }]}>
            Ödev Yükle{" "}
            <Text style={{ fontWeight: "400", fontSize: 13, color: iconColor }}>
              (yalnızca pdf ve jpeg dosyalar)
            </Text>
          </Text>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={styles.btnCenterPlusAddLecture}
              onPress={pickImage}
            >
              {image ? (
                <>
                  <Image
                    source={{ uri: image }}
                    style={{ width: "100%", height: 200, borderRadius: 10 }}
                    resizeMode="cover"
                  />
                </>
              ) : (
                <>
                  <View style={styles.plusButtonCenters}>
                    <AntDesign name="plus" size={font2024} color={white} />
                  </View>
                </>
              )}
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
              <Text style={styles.whiteTextForOrangeButton70}>Ödev Yükle</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Toolbar selectMenu={2} />
    </View>
  );
}
