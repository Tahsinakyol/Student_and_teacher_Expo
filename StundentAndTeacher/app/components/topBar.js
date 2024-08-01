import { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { useNavigation } from "expo-router";
import styles from "../../assets/styles/App.style";
import { showMessage } from "react-native-flash-message";
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import { font1820, font2024 } from "@/assets/styles/fontSize";
import { black, orange } from "@/assets/styles/colors";
import { useSelector } from "react-redux";
const TopBar = ({
  goBack = false,
  topBarName = "Tahsin Developer",
  rightBtn = "null",
}) => {
  const navigation = useNavigation();
  const [addy, setAddy] = useState(false);
  const [barry, setBarry] = useState(false);
  const [setting, setSetting] = useState(false);
  const { GeneralResponse } = useSelector((state) => state);
  const addFriend = () => {
    showMessage({
      message: !addy ? "Başarılı !" : "Arkadaş Listesinden Çıkartıldı",
      description: !addy
        ? `${topBarName} adlı Kişiyi Arkadaş Olarak Eklediniz`
        : `${topBarName} adlı Kişiyi Arkadaş Listesinden Çıkartıldı`,
      icon: !addy ? (
        <AntDesign
          name="checkcircleo"
          size={32}
          color="#fff"
          style={{ marginRight: 15 }}
        />
      ) : (
        <FontAwesome
          name="times"
          size={32}
          color="#fff"
          style={{ marginRight: 15 }}
        />
      ),
      type: "simpleMessage",
    });
    setAddy(!addy);
  };

  return (
    <>
      <View style={styles.topBarMain}>
        {goBack == true ? (
          <>
            <TouchableOpacity
              style={styles.topBarBtn}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="chevron-back-outline"
                size={font1820}
                color="black"
              />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View></View>
          </>
        )}
        <Text style={styles.topBarNameText}>{topBarName}</Text>
        {rightBtn == "add" ? (
          <>
            <TouchableOpacity style={styles.topBarBtn} onPress={addFriend}>
              {addy == false ? (
                <>
                  <AntDesign name="adduser" size={font1820} color={black} />
                </>
              ) : (
                <>
                  <FontAwesome5
                    name="user-check"
                    size={font1820}
                    color={orange}
                  />
                </>
              )}
            </TouchableOpacity>
          </>
        ) : rightBtn == "bar" ? (
          <>
            <TouchableOpacity
              style={styles.topBarBtn}
              onPress={() => setBarry(!barry)}
            >
              <Image
                style={
                  barry == false
                    ? styles.barsImageTopBar
                    : [
                        styles.barsImageTopBar,
                        { transform: [{ rotate: "90deg" }] },
                      ]
                }
                resizeMode="contain"
                source={require("../../assets/images/system/bar.png")}
              />
            </TouchableOpacity>
          </>
        ) : rightBtn == "ellipsize" ? (
          <>
            <TouchableOpacity
              style={styles.topBarBtn}
              onPress={() => setBarry(!barry)}
            >
              <FontAwesome6
                name="ellipsis-vertical"
                size={font2024}
                color={black}
              />
            </TouchableOpacity>
          </>
        ) : rightBtn == "ellipsizeProfil" ? (
          <>
            <TouchableOpacity
              style={styles.topBarBtn}
              onPress={() => setSetting(!setting)}
            >
              <FontAwesome6
                name="ellipsis-vertical"
                size={font2024}
                color={black}
              />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.topBarBtn}></View>
          </>
        )}
      </View>
      {barry == true ? (
        <>
          <View style={styles.absMenuBarryGenerate}>
            <TouchableOpacity
              style={styles.flexiblAbsoluteGenerate}
              onPress={() => navigation.navigate("home/studentClass/homework")}
            >
              <MaterialCommunityIcons
                name="file-table"
                size={font1820}
                color={black}
              />
              <Text style={styles.textAbsoluteMenu}>Ödevler</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.flexiblAbsoluteGenerate}
              onPress={() =>
                navigation.navigate("home/studentClass/quizses", {
                  btn: "bar",
                  profil: "another",
                })
              }
            >
              <MaterialCommunityIcons
                name="vector-square-plus"
                size={font1820}
                color={black}
              />
              <Text style={styles.textAbsoluteMenu}>Quizler</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.flexiblAbsoluteGenerate}
              onPress={() =>
                navigation.navigate("home/studentClass/successPage", {
                  banners: "bar",
                })
              }
            >
              <FontAwesome name="trophy" size={font1820} color={black} />
              <Text style={styles.textAbsoluteMenu}>Başarılar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.flexiblAbsoluteGenerate}
              onPress={() =>
                navigation.navigate("home/studentClass/studentList")
              }
            >
              <FontAwesome6 name="users" size={font1820} color={black} />
              <Text style={styles.textAbsoluteMenu}>Öğrenciler</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
      {setting == true ? (
        <>
          <View style={[styles.absMenuBarryGenerate, { height: 40 }]}>
            <TouchableOpacity
              style={[
                styles.flexiblAbsoluteGenerate,
                { width: "100%", height: 40 },
              ]}
              onPress={() =>
                navigation.navigate("home/profilFile/settingPage", {
                  name: "SevimYıldız",
                  imageProfil: require("../../assets/images/users/2.jpg"),
                  department: " Coğrafya Öğretmeni",
                  detail: "Ege Üniversitesi",
                  nameSurname: "Sevim Yıldız",
                  topBarBtn: "ellipsizeProfil",
                  profil: GeneralResponse.globalEmail,
                })
              }
            >
              <MaterialCommunityIcons
                name="cog"
                size={font1820}
                color={black}
              />
              <Text style={styles.textAbsoluteMenu}>Ayarlar</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </>
  );
};

export default TopBar;
