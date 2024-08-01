import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "expo-router";
import styles from "../../assets/styles/App.style";
import { useSelector } from "react-redux";
import { Entypo, FontAwesome5, Feather } from "@expo/vector-icons";
import { black, white } from "../../assets/styles/colors";
import { font2024 } from "../../assets/styles/fontSize";
const Toolbar = ({ selectMenu }) => {
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  return (
    <View style={styles.toolbarMain}>
      <View style={styles.blackToolBards}>
        <TouchableOpacity
          onPress={() => navigation.navigate("home/homePage")}
          style={
            selectMenu == 1
              ? styles.btnTopAbleOpacity
              : [styles.btnTopAbleOpacity, { opacity: 0.5 }]
          }
        >
          <Entypo name="home" size={font2024} color={white} />
          <Text style={styles.btntoolbarText}>AnaSayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("home/teacher/allClass", {
              nameSurname: "Sınıflar",
              classedName:
                GeneralResponse.globalEmail === "teacher"
                  ? "Sınıflar"
                  : "Katıldığım Sınıflar",
              profil:
                GeneralResponse.globalEmail === "teacher"
                  ? "teacher"
                  : "student",
            })
          }
          style={
            selectMenu == 2
              ? styles.btnTopAbleOpacity
              : [styles.btnTopAbleOpacity, { opacity: 0.5 }]
          }
        >
          <FontAwesome5
            name="chalkboard-teacher"
            size={font2024}
            color={white}
          />
          <Text style={styles.btntoolbarText}>Sınıflar</Text>
        </TouchableOpacity>
        {GeneralResponse.globalEmail == "teacher" ? (
          <>
            <TouchableOpacity
              style={styles.centerToolBarPlus}
              onPress={() => navigation.navigate("home/liveMainPage")}
            >
              <FontAwesome5 name="plus" size={font2024} color={black} />
            </TouchableOpacity>
          </>
        ) : null}
        <TouchableOpacity
          onPress={() => navigation.navigate("home/messageMain")}
          style={
            selectMenu == 4
              ? styles.btnTopAbleOpacity
              : [styles.btnTopAbleOpacity, { opacity: 0.5 }]
          }
        >
          <Feather name="message-square" size={font2024} color={white} />
          <Text style={styles.btntoolbarText}>Mesajlar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("home/teacher/teacherProfil", {
              name: "SevimYıldız",
              imageProfil: require("../../assets/images/users/2.jpg"),
              department: " Coğrafya Öğretmeni",
              detail: "Ege Üniversitesi",
              nameSurname: "Sevim Yıldız",
              topBarBtn: "ellipsizeProfil",
              profil: GeneralResponse.globalEmail,
            })
          }
          style={
            selectMenu == 5
              ? styles.btnTopAbleOpacity
              : [styles.btnTopAbleOpacity, { opacity: 0.5 }]
          }
        >
          <Feather name="user" size={font2024} color={white} />
          <Text style={styles.btntoolbarText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Toolbar;
