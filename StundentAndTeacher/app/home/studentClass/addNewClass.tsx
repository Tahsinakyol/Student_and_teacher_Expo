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
} from "react-native";
import styles from "../../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { iconColor } from "@/assets/styles/colors";
import SelectComp from "../../components/select";
import { Select } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";
import { StatusBar } from "expo-status-bar";
export default function AddNewClass() {
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
  const [videoState, setVideoState] = useState(false);
  const { height, width } = Dimensions.get("window");
  const [choose, setChoose] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleValueChange = (value: any) => {
    setSelectedValue(value);
    if (value == "spacial") {
      console.log(value);
      setChoose(true);
    } else {
      setChoose(false);
    }
  };

  const messageGoBack = () => {
    showMessage({
      message: "Başarılı !",
      description: "Yeni Sınıf Eklendi",
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
      <TopBar
        goBack={true}
        topBarName="Yeni Sınıf Oluştur"
        rightBtn={"nully"}
      />
      <View style={{ width: "100%", flex: 1, padding: width * 0.03 }}>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
        >
          <View style={styles.addLectureTextAndInput}>
            <Text style={styles.nameInputTopText}>Sınıf İsmi</Text>
            <TextInput
              placeholderTextColor={iconColor}
              placeholder="Sınıf İsmi"
              style={styles.inputAddLecture}
            />
          </View>
          <View style={styles.addLectureTextAndInput}>
            <Text style={styles.nameInputTopText}>Ders İsmi</Text>
            <TextInput
              placeholderTextColor={iconColor}
              placeholder="Ders İsmi"
              style={styles.inputAddLecture}
            />
          </View>
          <View style={styles.addLectureTextAndInput}>
            <Text style={styles.nameInputTopText}>Ders Başlığı</Text>
            <TextInput
              placeholderTextColor={iconColor}
              placeholder="Ders Başlığı"
              style={styles.inputAddLecture}
            />
          </View>
          <View style={styles.addLectureTextAndInput}>
            <Text style={styles.nameInputTopText}>Ders İçeriği</Text>
            <TextInput
              placeholderTextColor={iconColor}
              placeholder="Ders İçeriği"
              style={styles.inputAddLectureArea}
              multiline
            />
          </View>
          <SelectComp
            label="Öğrenciler"
            holder="Derse Katılacak Öğrencileri Seç"
            onValueChange={handleValueChange}
          >
            <Select.Item label="Tüm Ögrenciler" value="all" />
            <Select.Item label="Takipciler" value="follow" />
            <Select.Item
              label="Özel Ders"
              value="special"
              onPress={() => setChoose(true)}
            />
          </SelectComp>
          {choose == true ? (
            <>
              <SelectComp
                label="Özel Ders"
                holder="Derse Katılacak Öğrenciyi Seç"
              >
                <Select.Item label="Ali Yıldız" value="ali" />
                <Select.Item label="Tahsin Şahin" value="thsn" />
              </SelectComp>
            </>
          ) : null}
        </ScrollView>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: width * 0.03,
          }}
        >
          <TouchableOpacity
            style={styles.btnOrangeAddClass}
            onPress={messageGoBack}
          >
            <Text style={styles.whiteTextForOrangeButton70}>
              Sınıfı Oluştur
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toolbar selectMenu={2} />
    </View>
  );
}
